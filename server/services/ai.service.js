import { GoogleGenAI } from '@google/genai';

// Deterministic Keyword-based Fallback Classifier
const fallbackAnalyze = (text = '', title = '') => {
  const content = `${title} ${text}`.toLowerCase();

  let category = 'Other';
  let subCategory = 'General Civic Issue';
  let severity = 'MEDIUM';
  let safetyRisk = false;
  let department = 'General Services';

  // Keyword rules
  if (content.match(/pothole|hole|road|asphalt|tar|tarmac|street crack|pavement|cave-in/i)) {
    category = 'Road Damage';
    department = 'Roads';
    subCategory = content.includes('pothole') ? 'Pothole' : 'Surface Collapse';
    if (content.match(/bikes? falling|accidents?|dangerous|vehicle damage|deep|huge|giant/i)) {
      severity = 'HIGH';
      safetyRisk = true;
    }
  } else if (content.match(/water leak|pipe burst|main line|pipeline|water gushing|drinking water/i)) {
    category = 'Water Leakage';
    department = 'Water & Drainage';
    subCategory = content.includes('burst') ? 'Pipe Burst' : 'Clean Water Loss';
    if (content.match(/gushing|flooding|burst|massive/i)) {
      severity = 'HIGH';
      safetyRisk = true;
    }
  } else if (content.match(/drain|sewer|overflow|clogged|stagnant|black water|gutters|drainage/i)) {
    category = 'Drainage';
    department = 'Water & Drainage';
    subCategory = content.includes('sewer') ? 'Sewer Overflow' : 'Clogged Drain';
    if (content.match(/overflowing|house flooding|foul smell|health hazard/i)) {
      severity = 'HIGH';
    }
  } else if (content.match(/garbage|trash|waste|dumping|litter|smell|bin|refuse/i)) {
    category = 'Garbage';
    department = 'Sanitation';
    subCategory = 'Uncollected Waste';
    if (content.match(/piles|decaying|rats|blockade/i)) {
      severity = 'MEDIUM';
    }
  } else if (content.match(/light|streetlight|dark|lamp|pole|short circuit|electricity/i)) {
    category = 'Streetlight';
    department = 'Electrical';
    subCategory = 'Outage';
    if (content.match(/dark alley|unsafe|crime|sparking/i)) {
      severity = 'MEDIUM';
      safetyRisk = true;
    }
  } else if (content.match(/safety|fire|tree fallen|live wire|hazard|collapse|danger/i)) {
    category = 'Public Safety';
    department = 'Public Safety';
    subCategory = content.includes('wire') ? 'Exposed Wiring' : 'Immediate Hazard';
    severity = 'CRITICAL';
    safetyRisk = true;
  }

  // Calculate base score
  let priorityScore = 50;
  if (severity === 'CRITICAL') priorityScore = 92;
  else if (severity === 'HIGH') priorityScore = 84;
  else if (severity === 'MEDIUM') priorityScore = 58;
  else priorityScore = 32;

  if (safetyRisk) priorityScore = Math.min(99, priorityScore + 10);

  return {
    category,
    subCategory,
    severity,
    safetyRisk,
    department,
    priorityScore,
    confidence: 0.88,
    summary: safetyRisk
      ? `AI detected a high-risk ${category.toLowerCase()} hazard.`
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
