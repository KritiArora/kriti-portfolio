import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const langModule = await import(`../components/lang/${currentLang}.json`);
        setTranslations(langModule.default);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English if translation fails
        const enModule = await import('../components/lang/en.json');
        setTranslations(enModule.default);
      }
    };

    loadTranslations();
  }, [currentLang]);

  const translate = (key) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
