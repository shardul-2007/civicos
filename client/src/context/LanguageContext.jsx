import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const TRANSLATIONS = {
  en: {
    // Navbar & Common
    platform: "Platform",
    howItWorks: "How It Works",
    intelligence: "Intelligence",
    trackIssue: "Track Issue",
    reportIssue: "Report Issue",
    reportProblem: "Report Problem",
    login: "Login",
    commandCenter: "Command Center",
    fieldDesk: "Field Officer Desk",
    searchPlaceholder: "Search complaints, wards...",
    exportReport: "Export Report",
    notifications: "Notifications",
    logout: "Log Out",
    welcomeTitle: "CivicOS Municipal Operating System",
    welcomeSubtitle: "Good evening • Here's what is happening across your city today.",
    selectLang: "Language / भाषा / भाषा बदलू",

    // Hero & Landing Page
    heroBadge: "AI-Powered Municipal Operating System",
    heroTitle: "From citizen reports to city intelligence.",
    heroSubtitle: "CivicOS transforms every civic complaint into prioritised incidents, live geospatial intelligence, coordinated field action, and verified resolution — end-to-end.",
    reportIssueBtn: "Report an Issue",
    trackIssueBtn: "Track Complaint",
    commandCenterBtn: "Command Center",
    workflowTitle: "From Report to Resolution",
    workflowSubtitle: "Complete 8-step municipal intelligence pipeline — fully automated",

    // 8 Workflow Steps
    step1Title: "Citizen Report",
    step1Desc: "Submit with photo & GPS pin on map",
    step2Title: "AI Classification",
    step2Desc: "LLM extracts category, severity & safety risk",
    step3Title: "Duplicate Detection",
    step3Desc: "Haversine clusters nearby reports (≤500m)",
    step4Title: "Priority Scoring",
    step4Desc: "Deterministic 0–100 urgency formula",
    step5Title: "Department Routing",
    step5Desc: "Auto-assigned to correct municipal dept",
    step6Title: "SLA Countdown",
    step6Desc: "Category-based deadline enforcement",
    step7Title: "Field Resolution",
    step7Desc: "Officer dispatched with GPS navigation",
    step8Title: "Citizen Verified",
    step8Desc: "Citizen confirms fix or reopens the issue",

    // Report Complaint Page
    reportHeaderTitle: "Report a Municipal Problem",
    reportHeaderSub: "AI automatically classifies your issue, assigns priority, and alerts field officers.",
    stepProblem: "1. Problem Details",
    stepLocation: "2. Incident Location",
    stepContact: "3. Citizen Contact",
    stepConfirm: "4. Submit Complaint",
    issueTitleLabel: "Issue Title",
    issueTitlePlace: "e.g. Large pothole near College Gate",
    descLabel: "Detailed Description",
    descPlace: "Describe what happened, exact landmarks, or safety risk...",
    catLabel: "Category",
    wardLabel: "Ward Number",
    photoLabel: "Upload Photo Evidence",
    nextBtn: "Continue to Location",
    submitBtn: "Submit Municipal Complaint",

    // Track Complaint Page
    trackHeaderTitle: "Track Civic Complaint Status",
    trackHeaderSub: "Enter your tracking code or phone number to view live SLA progress and field officer updates.",
    searchCodePlace: "Enter Tracking Code (e.g. CIV-138987-644E)...",
    searchBtn: "Track Status",
    statusSubmitted: "Submitted",
    statusAssigned: "Assigned to Dept",
    statusAccepted: "Officer Accepted",
    statusProgress: "Field Work In Progress",
    statusResolved: "Resolved & Fixed",
    verifyQuestion: "Is this issue fixed to your satisfaction?",
    yesBtn: "Yes, Issue Resolved",
    noBtn: "No, Reopen Complaint",

    // Dashboard Overview
    totalComplaints: "Total Complaints",
    activeIncidents: "Active Field Incidents",
    slaBreached: "SLA Breached",
    resolvedRate: "Resolution Rate",
    recentIncidents: "Recent Municipal Complaints",
    mapViewTitle: "Geospatial Intelligence Map",

    // Footer
    copyright: "© 2026 CivicOS Municipal Operating System. All Rights Reserved.",
  },

  hi: {
    // Navbar & Common
    platform: "प्लेटफ़ॉर्म",
    howItWorks: "यह कैसे काम करता है",
    intelligence: "इंटेलिजेंस",
    trackIssue: "शिकायत ट्रैक करें",
    reportIssue: "समस्या दर्ज करें",
    reportProblem: "समस्या दर्ज करें",
    login: "लॉग इन",
    commandCenter: "कमांड सेंटर",
    fieldDesk: "फील्ड ऑफिसर डेस्क",
    searchPlaceholder: "शिकायतें, वार्ड खोजें...",
    exportReport: "रिपोर्ट एक्सपोर्ट करें",
    notifications: "सूचनाएं",
    logout: "लॉग आउट",
    welcomeTitle: "सिविक-ओएस नगर निगम ऑपरेटिंग सिस्टम",
    welcomeSubtitle: "नमस्ते • आज आपके शहर में हो रही गतिविधियों का विवरण।",
    selectLang: "भाषा चुनें",

    // Hero & Landing Page
    heroBadge: "एआई-संचालित नगर निगम ऑपरेटिंग सिस्टम",
    heroTitle: "नागरिक शिकायतों से शहर की इंटेलिजेंस तक।",
    heroSubtitle: "सिविक-ओएस हर नागरिक शिकायत को प्राथमिकता, लाइव जीआईएस मानचित्र, त्वरित फील्ड कार्रवाई और सत्यापित समाधान में बदलता है।",
    reportIssueBtn: "समस्या दर्ज करें",
    trackIssueBtn: "शिकायत ट्रैक करें",
    commandCenterBtn: "कमांड सेंटर",
    workflowTitle: "रिपोर्ट से समाधान तक",
    workflowSubtitle: "संपूर्ण 8-चरणीय नगर निगम इंटेलिजेंस प्रणाली — पूर्णतः स्वचालित",

    // 8 Workflow Steps
    step1Title: "नागरिक रिपोर्ट",
    step1Desc: "फोटो और जीपीएस पिन के साथ शिकायत दर्ज करें",
    step2Title: "एआई वर्गीकरण",
    step2Desc: "एआई श्रेणी, गंभीरता और सुरक्षा जोखिम का विश्लेषण करता है",
    step3Title: "डुप्लिकेट पहचान",
    step3Desc: "समीप की शिकायतों की पहचान और क्लस्टरिंग (≤500m)",
    step4Title: "प्राथमिकता स्कोर",
    step4Desc: "0-100 तात्कालीकता स्कोरिंग सूत्र",
    step5Title: "विभाग आवंटन",
    step5Desc: "सही नगर निगम विभाग को स्वचालित आवंटन",
    step6Title: "समय-सीमा काउंटडाउन",
    step6Desc: "श्रेणी अनुसार समय-सीमा का पालन",
    step7Title: "फील्ड समाधान",
    step7Desc: "जीपीएस नेविगेशन के साथ अधिकारी रवाना",
    step8Title: "नागरिक सत्यापन",
    step8Desc: "नागरिक समाधान की पुष्टि करता है या पुनः खोलता है",

    // Report Complaint Page
    reportHeaderTitle: "नगर निगम समस्या दर्ज करें",
    reportHeaderSub: "एआई स्वचालित रूप से आपकी समस्या को वर्गीकृत करता है और अधिकारियों को सचेत करता है।",
    stepProblem: "1. समस्या विवरण",
    stepLocation: "2. घटना का स्थान",
    stepContact: "3. नागरिक संपर्क",
    stepConfirm: "4. शिकायत जमा करें",
    issueTitleLabel: "समस्या का शीर्षक",
    issueTitlePlace: "उदा. कॉलेज गेट के पास बड़ा गड्ढा",
    descLabel: "विस्तृत विवरण",
    descPlace: "बताएं क्या हुआ, सटीक लैंडमार्क या सुरक्षा जोखिम...",
    catLabel: "श्रेणी चुनें",
    wardLabel: "वार्ड संख्या",
    photoLabel: "फोटो प्रमाण अपलोड करें",
    nextBtn: "स्थान पर आगे बढ़ें",
    submitBtn: "नगर निगम शिकायत जमा करें",

    // Track Complaint Page
    trackHeaderTitle: "नागरिक शिकायत की स्थिति ट्रैक करें",
    trackHeaderSub: "लाइव प्रगति और अधिकारी अपडेट देखने के लिए अपना ट्रैकिंग कोड दर्ज करें।",
    searchCodePlace: "ट्रैकिंग कोड दर्ज करें (उदा. CIV-138987-644E)...",
    searchBtn: "स्थिति खोजें",
    statusSubmitted: "जमा किया गया",
    statusAssigned: "विभाग को आवंटित",
    statusAccepted: "अधिकारी द्वारा स्वीकृत",
    statusProgress: "फील्ड कार्य जारी",
    statusResolved: "समाधान संपन्न",
    verifyQuestion: "क्या यह समस्या आपकी संतुष्टि के अनुसार हल हो गई है?",
    yesBtn: "हाँ, समस्या हल हो गई",
    noBtn: "नहीं, शिकायत पुनः खोलें",

    // Dashboard Overview
    totalComplaints: "कुल शिकायतें",
    activeIncidents: "सक्रिय फील्ड मामले",
    slaBreached: "समय-सीमा उल्लंघन",
    resolvedRate: "समाधान दर",
    recentIncidents: "हाल की नगर निगम शिकायतें",
    mapViewTitle: "जीियोस्पेशियल इंटेलिजेंस मानचित्र",

    // Footer
    copyright: "© 2026 सिविक-ओएस नगर निगम ऑपरेटिंग सिस्टम। सर्वाधिकार सुरक्षित।",
  },

  mr: {
    // Navbar & Common
    platform: "प्लॅटफॉर्म",
    howItWorks: "हे कसे कार्य करते",
    intelligence: "इंटेलिजन्स",
    trackIssue: "तक्रार ट्रॅक करा",
    reportIssue: "समस्या नोंदवा",
    reportProblem: "समस्या नोंदवा",
    login: "लॉगिन",
    commandCenter: "कमांड सेंटर",
    fieldDesk: "फील्ड ऑफिसर डेस्क",
    searchPlaceholder: "तक्रारी, प्रभाग शोधा...",
    exportReport: "अहवाल एक्सपोर्ट करा",
    notifications: "सूचना",
    logout: "लॉग आउट",
    welcomeTitle: "सिव्हिक-ओएस महानगरपालिका ऑपरेटिंग सिस्टीम",
    welcomeSubtitle: "नमस्कार • आज तुमच्या शहरात घडणाऱ्या घडामोडींचे तपशील.",
    selectLang: "भाषा निवडा",

    // Hero & Landing Page
    heroBadge: "एआय-संचालित महानगरपालिका ऑपरेटिंग सिस्टीम",
    heroTitle: "नागरिकांच्या तक्रारींपासून शहराच्या बुद्धिमत्तेपर्यंत.",
    heroSubtitle: "सिव्हिक-ओएस प्रत्येक नागरिक तक्रारीचे प्राधान्यीकृत घटनांमध्ये, थेट जीआयएस नकाशावर, त्वरित कारवाईत आणि सत्यापित निवारणात रूपांतर करते.",
    reportIssueBtn: "समस्या नोंदवा",
    trackIssueBtn: "तक्रार ट्रॅक करा",
    commandCenterBtn: "कमांड सेंटर",
    workflowTitle: "तक्रारीपासून निवारणापर्यंत",
    workflowSubtitle: "संपूर्ण 8-टप्प्यांची महापालिका इंटेलिजन्स प्रणाली — पूर्णपणे स्वयंचलित",

    // 8 Workflow Steps
    step1Title: "नागरिक अहवाल",
    step1Desc: "फोटो आणि जीपीएस पिनसह तक्रार नोंदवा",
    step2Title: "एआय वर्गीकरण",
    step2Desc: "एआय श्रेणी, तीव्रता आणि सुरक्षिततेचा धोका विश्लेषित करते",
    step3Title: "डुप्लिकेट शोध",
    step3Desc: "जवळपासच्या तक्रारींची ओळख आणि क्लस्टरिंग (≤500m)",
    step4Title: "प्राधान्य गुणोत्तर",
    step4Desc: "0-100 तातडीचे स्कोरिंग सूत्र",
    step5Title: "विभाग वर्गवारी",
    step5Desc: "योग्य महापालिका विभागाकडे स्वयंचलित वर्गवारी",
    step6Title: "मुदत काउंटडाउन",
    step6Desc: "श्रेणीनुसार मुदत अंमलबजावणी",
    step7Title: "फील्ड निवारण",
    step7Desc: "जीपीएस नेव्हिगेशनसह अधिकारी रवाना",
    step8Title: "नागरिक पडताळणी",
    step8Desc: "नागरिक निवारणाची पुष्टी करतो किंवा पुन्हा उघडतो",

    // Report Complaint Page
    reportHeaderTitle: "महापालिका समस्या नोंदवा",
    reportHeaderSub: "एआय स्वयंचलितपणे तुमच्या समस्येचे वर्गीकरण करते आणि अधिकाऱ्यांना सूचित करते.",
    stepProblem: "1. समस्येचा तपशील",
    stepLocation: "2. घटनेचे ठिकाण",
    stepContact: "3. नागरिक संपर्क",
    stepConfirm: "4. तक्रार सबमिट करा",
    issueTitleLabel: "समस्येचे शीर्षक",
    issueTitlePlace: "उदा. कॉलेज गेटजवळ मोठा खड्डा",
    descLabel: "सविस्तर वर्णन",
    descPlace: "काय घडले ते सांगा, अचूक ठिकाण किंवा सुरक्षिततेचा धोका...",
    catLabel: "श्रेणी निवडा",
    wardLabel: "प्रभाग क्रमांक",
    photoLabel: "फोटो पुरावा अपलोड करा",
    nextBtn: "ठिकाणावर पुढे जा",
    submitBtn: "महापालिका तक्रार सबमिट करा",

    // Track Complaint Page
    trackHeaderTitle: "नागरिक तक्रारीची स्थिती ट्रॅक करा",
    trackHeaderSub: "थेट प्रगती आणि अधिकारी अपडेट्स पाहण्यासाठी तुमचा ट्रॅकिंग कोड प्रविष्ट करा.",
    searchCodePlace: "ट्रॅकिंग कोड प्रविष्ट करा (उदा. CIV-138987-644E)...",
    searchBtn: "स्थिती शोधा",
    statusSubmitted: "सबमिट केले",
    statusAssigned: "विभागाकडे वर्ग",
    statusAccepted: "अधिकाऱ्याने स्वीकारले",
    statusProgress: "काम प्रगतीपथावर",
    statusResolved: "निवारण झाले",
    verifyQuestion: "या समस्येचे आपल्या समाधानानुसार निवारण झाले आहे का?",
    yesBtn: "होय, समस्या सुटली",
    noBtn: "नाही, तक्रार पुन्हा उघडा",

    // Dashboard Overview
    totalComplaints: "एकूण तक्रारी",
    activeIncidents: "सक्रिय घटना",
    slaBreached: "मुदत उल्लंघन",
    resolvedRate: "निवारण दर",
    recentIncidents: "अलीकडील तक्रारी",
    mapViewTitle: "जीआयएस नकाशे आणि घटना",

    // Footer
    copyright: "© 2026 सिव्हिक-ओएस महानगरपालिका ऑपरेटिंग सिस्टीम. सर्व हक्क राखीव.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('civicos_lang') || 'en');

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('civicos_lang', newLang);
  };

  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
