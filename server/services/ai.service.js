import { GoogleGenAI } from '@google/genai';

// Comprehensive Natural Language Fallback Classifier (Supports English, Hindi & Marathi Citizen Terms)
const fallbackAnalyze = (text = '', title = '') => {
  const content = `${title} ${text}`.toLowerCase().trim();

  let category = 'Other';
  let subCategory = 'General Civic Issue';
  let severity = 'MEDIUM';
  let safetyRisk = false;
  let department = 'General Municipal Services';

  // 1. Waste Management / Garbage / Kachra
  if (content.match(/garbage|waste|trash|rubbish|dumping|litter|smell|bin|refuse|kachra|कचरा|कचरा जमा|कचरा उचलला|गंदगी|कचरापेटी|toilet|public toilet/i) || content === 'waste' || content === 'garbage') {
    category = 'Garbage';
    department = 'Sanitation & Solid Waste Dept';
    subCategory = 'Uncollected Waste & Sanitation';
    severity = content.match(/days|lots|huge|decaying|rats|blockade|smell|foul/i) ? 'HIGH' : 'MEDIUM';
  }
  // 2. Road Damage / Pothole / Khadda / Rasta
  else if (content.match(/pothole|hole|road|asphalt|tar|tarmac|street crack|pavement|cave-in|broken road|damaged road|khadda|खड्डा|रस्ता|खराब|खड्डे/i) || content.includes('road')) {
    category = 'Road Damage';
    department = 'Roads & Municipal Infrastructure';
    subCategory = content.includes('pothole') ? 'Pothole' : 'Road Surface Collapse';
    if (content.match(/bikes? falling|accidents?|dangerous|vehicle damage|deep|huge|giant|falling/i)) {
      severity = 'HIGH';
      safetyRisk = true;
    }
  }
  // 3. Water Leakage / Pipeline Burst / Paani
  else if (content.match(/water leak|pipe leak|pipe burst|main line|pipeline|water gushing|drinking water|water leaking|पाणी|गळती|पाण्याची पाइपलाइन|पानी रिसाव/i) || content.includes('water')) {
    category = 'Water Leakage';
    department = 'Water Supply & Sanitation Dept';
    subCategory = content.includes('burst') ? 'Pipe Burst' : 'Clean Water Leakage';
    if (content.match(/gushing|flooding|burst|massive|continuous/i)) {
      severity = 'HIGH';
      safetyRisk = true;
    }
  }
  // 4. Drainage / Sewage / Sewer / Nala / Gutters
  else if (content.match(/drain|drainage|sewer|sewage|overflow|clogged|stagnant|black water|gutters|nala|naali|गटार|नाली|नाला|तुंबला|नाली निकासी/i)) {
    category = 'Drainage';
    department = 'Drainage & Sewerage Services';
    subCategory = content.includes('sewer') ? 'Sewer Overflow' : 'Clogged Drain Line';
    if (content.match(/overflowing|house flooding|foul smell|health hazard/i)) {
      severity = 'HIGH';
      safetyRisk = true;
    }
  }
  // 5. Streetlight / Dark Street / Diva / Light
  else if (content.match(/streetlight|road light|lamp|dark street|street light|दिवा|लाइट|लाइट बंद|स्ट्रीट लाईट|रोड लाइट/i)) {
    category = 'Streetlight';
    department = 'Electrical Services Dept';
    subCategory = 'Luminaire Outage';
    if (content.match(/dark alley|unsafe|crime|sparking|dark/i)) {
      severity = 'MEDIUM';
      safetyRisk = true;
    }
  }
  // 6. Electricity / Wire / Pole / Power Line / Weej
  else if (content.match(/electric pole|wire|power line|electricity|short circuit|वीज|वीज खांब|तार तुटली|बिजली/i)) {
    category = 'Public Safety';
    department = 'Electricity & Power Distribution';
    subCategory = 'Exposed Electrical Hazard';
    severity = 'HIGH';
    safetyRisk = true;
  }
  // 7. Public Safety / Danger / Tree Fallen
  else if (content.match(/safety|fire|tree fallen|live wire|hazard|collapse|danger|dangerous|school|obstruction/i)) {
    category = 'Public Safety';
    department = 'Public Safety & Emergency Cell';
    subCategory = 'Immediate Hazard';
    severity = 'CRITICAL';
    safetyRisk = true;
  }

  // Calculate Priority Score
  let priorityScore = 55;
  if (severity === 'CRITICAL') priorityScore = 92;
  else if (severity === 'HIGH') priorityScore = 84;
  else if (severity === 'MEDIUM') priorityScore = 65;
  else priorityScore = 40;

  if (safetyRisk) priorityScore = Math.min(99, priorityScore + 10);

  return {
    category,
    subCategory,
    severity,
    safetyRisk,
    department,
    priorityScore,
    confidence: 0.90,
    summary: safetyRisk
      ? `AI detected a high-priority ${category.toLowerCase()} hazard requiring municipal action.`
      : `AI classified complaint under ${category}.`,
    isFallback: true,
  };
};

export const analyzeComplaint = async (description = '', title = '') => {
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    return fallbackAnalyze(description, title);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Analyze the following municipal civic complaint and return ONLY a strict JSON object (no markdown, no code blocks):
Text: "${title} ${description}"

Required JSON schema:
{
  "category": "Road Damage" | "Water Leakage" | "Drainage" | "Garbage" | "Streetlight" | "Public Safety" | "Other",
  "subCategory": "short subcategory string",
  "severity": "CRITICAL" | "HIGH" | "MEDIUM" | "LOW",
  "safetyRisk": boolean,
  "department": "Roads" | "Water & Drainage" | "Sanitation" | "Electrical" | "Public Safety" | "General Services",
  "priorityScore": number between 1 and 100,
  "confidence": number between 0 and 1,
  "summary": "Brief 1-sentence analytical summary"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const rawText = response.text || '';
    const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanJson);

    return {
      category: parsed.category || 'Other',
      subCategory: parsed.subCategory || 'General',
      severity: parsed.severity || 'MEDIUM',
      safetyRisk: Boolean(parsed.safetyRisk),
      department: parsed.department || 'General Services',
      priorityScore: Number(parsed.priorityScore) || 50,
      confidence: Number(parsed.confidence) || 0.95,
      summary: parsed.summary || 'AI analysis completed.',
      isFallback: false,
    };
  } catch (error) {
    console.warn('[AI Service] Gemini API call failed or unparseable. Falling back to rule-based engine:', error.message);
    return fallbackAnalyze(description, title);
  }
};
