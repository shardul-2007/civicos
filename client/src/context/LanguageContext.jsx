import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const TRANSLATIONS = {
  en: {
    // Sidebar Navigation Keys
    navOverview: "Command Overview",
    navComplaints: "Complaints Queue",
    navMap: "Live Incident Map",
    navDepartments: "Department Oversight",
    navAnalytics: "City Analytics",
    navAi: "AI Intelligence",
    navPredictions: "Predictive Intelligence",
    navSla: "SLA Performance",
    navOfficer: "Field Officer Desk",

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

    // Admin Overview Dashboard
    overviewTitle: "City Operations Overview",
    overviewSub: "Real-time civic health, priority actions, and municipal intelligence stream",
    demoScenario: "DEMO SCENARIO: Ward 12 Water Pipeline Failure",
    demoDesc: "37 citizen reports aggregated within 500m radius in Ward 12. Priority Score 91/100. SLA countdown active (04:00:00). Auto-routed to Water Department & Field Inspector Rajesh.",
    inspectBtn: "Inspect Incident Cluster #INC-1042",
    totalIngested: "Total Ingested",
    activeIncidents: "Active Incidents",
    slaBreached: "SLA Breached",
    resolvedTodayCount: "Resolved Today",
    resolutionRatePct: "Resolution Rate",
    recentIncidents: "Recent Municipal Complaints",
    mapViewTitle: "Smart City Geospatial Command",
    deptWorkloadRadar: "Department Workload Radar",
    slaCountdownRadar: "SLA Compliance Countdown",
    liveAiStream: "Live AI Event Stream",

    // Department Oversight
    deptEyebrow: "MUNICIPAL DEPARTMENT OVERSIGHT",
    deptTitle: "Regional Workload & Operating Intelligence",
    deptSub: "Live capacity tracking, assigned complaints, SLA compliance rates, and active personnel across all municipal departments.",

    // SLA Monitor
    slaEyebrow: "SERVICE LEVEL AGREEMENT MONITORING",
    slaTitle: "Real-time SLA Target & Escalation Radar",
    slaSub: "Category-based deadline enforcement, live countdown timers, and automated breach prevention alerts.",

    // City Analytics
    analyticsEyebrow: "MUNICIPAL DATA ANALYTICS",
    analyticsTitle: "City-Wide Performance Metrics",
    analyticsSub: "Historical complaint trends, ward-level resolution efficiency, and department capacity benchmarks.",

    // Field Officer Desk
    officerEyebrow: "FIELD OFFICER DISPATCH COMMAND",
    officerTitle: "Active Incident Dispatch Queue",
    officerSub: "Manage assigned tasks, update work status, upload proof photos, and confirm field resolution.",

    // Footer
    copyright: "© 2026 CivicOS Municipal Operating System. All Rights Reserved.",
  },

  hi: {
    // Sidebar Navigation Keys
    navOverview: "कमांड ओवरव्यू",
    navComplaints: "शिकायत कतार",
    navMap: "लाइव घटना नक्शा",
    navDepartments: "विभाग निगरानी",
    navAnalytics: "शहर विश्लेषिकी",
    navAi: "एआई इंटेलिजेंस",
    navPredictions: "पूर्वानुमान इंटेलिजेंस",
    navSla: "समय-सीमा प्रदर्शन",
    navOfficer: "फील्ड अधिकारी डेस्क",

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

    // Admin Overview Dashboard
    overviewTitle: "नगर निगम संचालन अवलोकन",
    overviewSub: "रियल-टाइम नागरिक स्वास्थ्य, प्राथमिकता वाली कार्रवाईयां और नगर निगम इंटेलिजेंस स्ट्रीम",
    demoScenario: "डेमो परिदृश्य: वार्ड 12 जल पाइपलाइन विफलता",
    demoDesc: "वार्ड 12 में 500 मीटर के दायरे में 37 नागरिक रिपोर्टें एकत्र की गईं। प्राथमिकता स्कोर 91/100। एसएलए काउंटडाउन सक्रिय (04:00:00)। जल विभाग और फील्ड इंस्पेक्टर राजेश को स्वचालित रूप से आवंटित।",
    inspectBtn: "घटना क्लस्टर #INC-1042 का निरीक्षण करें",
    totalIngested: "कुल दर्ज शिकायतें",
    activeIncidents: "सक्रिय फील्ड मामले",
    slaBreached: "समय-सीमा उल्लंघन",
    resolvedTodayCount: "आज हल की गई शिकायतें",
    resolutionRatePct: "समाधान दर",
    recentIncidents: "हाल की नगर निगम शिकायतें",
    mapViewTitle: "स्मार्ट सिटी जीियोस्पेशियल कमांड",
    deptWorkloadRadar: "विभाग कार्यभार रडार",
    slaCountdownRadar: "समय-सीमा अनुपालन काउंटडाउन",
    liveAiStream: "लाइव एआई इवेंट स्ट्रीम",

    // Department Oversight
    deptEyebrow: "नगर निगम विभाग निगरानी",
    deptTitle: "क्षेत्रीय कार्यभार और संचालन इंटेलिजेंस",
    deptSub: "सभी नगर निगम विभागों में लाइव क्षमता ट्रैकिंग, आवंटित शिकायतें, और सक्रिय कर्मचारी।",

    // SLA Monitor
    slaEyebrow: "सेवा स्तर समझौता निगरानी",
    slaTitle: "लाइव समय-सीमा लक्ष्य और एस्केलेशन रडार",
    slaSub: "श्रेणी-आधारित समय सीमा प्रवर्तन, लाइव काउंटडाउन टाइमर, और स्वचालित उल्लंघन निवारण चेतावनियां।",

    // City Analytics
    analyticsEyebrow: "नगर निगम डेटा विश्लेषिकी",
    analyticsTitle: "शहर-स्तरीय प्रदर्शन मेट्रिक्स",
    analyticsSub: "ऐतिहासिक शिकायत रुझान, वार्ड-स्तरीय समाधान दक्षता, और विभाग क्षमता मानदंड।",

    // Field Officer Desk
    officerEyebrow: "फील्ड अधिकारी प्रेषण कमांड",
    officerTitle: "सक्रिय घटना प्रेषण कतार",
    officerSub: "आवंटित कार्यों का प्रबंधन करें, कार्य स्थिति अपडेट करें, फोटो अपलोड करें और समाधान की पुष्टि करें।",

    // Footer
    copyright: "© 2026 सिविक-ओएस नगर निगम ऑपरेटिंग सिस्टम। सर्वाधिकार सुरक्षित।",
  },

  mr: {
    // Sidebar Navigation Keys
    navOverview: "कमांड सर्व्हालोकन",
    navComplaints: "तक्रार रांग",
    navMap: "स्मार्ट सिटी जीआयएस नकाशा",
    navDepartments: "महानगरपालिका विभाग देखरेख",
    navAnalytics: "शहर-स्तरीय कामगिरी मोजमाप",
    navAi: "इंटेलिजन्स",
    navPredictions: "पूर्वानुमान इंटेलिजन्स",
    navSla: "मुदत कार्यक्षमता",
    navOfficer: "फील्ड अधिकारी डेस्क",

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
    heroBadge: "एआई-संचालित महानगरपालिका ऑपरेटिंग सिस्टीम",
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
    step2Title: "एआई वर्गीकरण",
    step2Desc: "एआई श्रेणी, तीव्रता आणि सुरक्षिततेचा धोका विश्लेषित करते",
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
    reportHeaderSub: "एआई स्वयंचलितपणे तुमच्या समस्येचे वर्गीकरण करते आणि अधिकाऱ्यांना सूचित करते.",
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

    // Admin Overview Dashboard
    overviewTitle: "शहर महापालिका कामकाज सर्व्हालोकन",
    overviewSub: "थेट नागरी आरोग्य, प्राधान्य कारवाया आणि महापालिका इंटेलिजन्स स्ट्रीम",
    demoScenario: "डेमो देखावा: प्रभाग 12 मधील पाणी पुरवठा वाहिनी बिघाड",
    demoDesc: "प्रभाग 12 मध्ये 500 मीटर परिसरात 37 नागरिक तक्रारी एकत्र आल्या. प्राधान्य स्कोर 91/100. मुदत मोजणी सक्रिय (04:00:00). पाणी पुरवठा विभाग आणि अधिकारी राजेश यांच्याकडे वर्गवारी.",
    inspectBtn: "घटना क्लस्टर #INC-1042 तपासा",
    totalIngested: "एकूण प्राप्त तक्रारी",
    activeIncidents: "सक्रिय घटना",
    slaBreached: "मुदत उल्लंघन",
    resolvedTodayCount: "आज सुटलेल्या तक्रारी",
    resolutionRatePct: "निवारण दर",
    recentIncidents: "अलीकडील तक्रारी",
    mapViewTitle: "स्मार्ट सिटी जीआयएस नकाशा",
    deptWorkloadRadar: "विभाग कार्यभार रडार",
    slaCountdownRadar: "मुदत कार्यक्षमता मोजणी",
    liveAiStream: "थेट एआय घटना फीड",

    // Department Oversight
    deptEyebrow: "महानगरपालिका विभाग देखरेख",
    deptTitle: "प्रादेशिक कार्यभार आणि कार्यप्रणाली",
    deptSub: "सर्व महापालिका विभागांमधील थेट क्षमता ट्रॅकिंग, वाटप केलेल्या तक्रारी आणि सक्रिय कर्मचारी.",

    // SLA Monitor
    slaEyebrow: "सेवा स्तर करार देखरेख",
    slaTitle: "थेट मुदत उद्दिष्ट आणि एस्कॅलेशन रडार",
    slaSub: "श्रेणीनुसार मुदत अंमलबजावणी, थेट काउंटडाउन टाइमर आणि स्वयंचलित उल्लंघन सूचना.",

    // City Analytics
    analyticsEyebrow: "महानगरपालिका डेटा विश्लेषण",
    analyticsTitle: "शहर-स्तरीय कामगिरी मोजमाप",
    analyticsSub: "ऐतिहासिक तक्रार ट्रेंड, प्रभाग-स्तरीय निवारण कार्यक्षमता आणि विभाग क्षमता निकष.",

    // Field Officer Desk
    officerEyebrow: "फील्ड अधिकारी प्रेषण कमांड",
    officerTitle: "सक्रिय घटना प्रेषण रांग",
    officerSub: "नियुक्त कामांचे व्यवस्थापन करा, कामाची स्थिती अपडेट करा, फोटो अपलोड करा आणि निवारणाची पुष्टी करा.",

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
