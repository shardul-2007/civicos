import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const TRANSLATIONS = {
  en: {
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
    heroTitle: "From citizen reports to city intelligence.",
    heroSubtitle: "CivicOS transforms every civic complaint into prioritised incidents, live geospatial intelligence, coordinated field action, and verified resolution.",
    selectLang: "Language / भाषा / भाषा बदलू",
  },
  hi: {
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
    heroTitle: "नागरिक शिकायतों से शहर की इंटेलिजेंस तक।",
    heroSubtitle: "सिविक-ओएस हर नागरिक शिकायत को प्राथमिकता, लाइव जीआईएस मानचित्र, त्वरित फील्ड कार्रवाई और सत्यापित समाधान में बदलता है।",
    selectLang: "भाषा चुनें",
  },
  mr: {
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
    heroTitle: "नागरिकांच्या तक्रारींपासून शहराच्या बुद्धिमत्तेपर्यंत.",
    heroSubtitle: "सिव्हिक-ओएस प्रत्येक नागरिक तक्रारीचे प्राधान्यीकृत घटनांमध्ये, थेट जीआयएस नकाशावर आणि त्वरित कारवाईत रूपांतर करते.",
    selectLang: "भाषा निवडा",
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
