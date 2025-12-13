import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

const ChangeLanguale = ({ children }) => {

    const [language, setLanguageState] = useState(localStorage.getItem('language') || "uz");


    const translation = {
        uz: {
            Contact: "Aloqa",
            Statistic: "Statistika",
            sign_In: "chiqish",
        },

        en: {
            Contact: "Contact",
            Statistic: "Statistic",
            sign_In: "sign out",
        },

        ru: {
            Contact: "Контакты",
            Statistic: "Статистика",
            sign_In: "выход",
        },
    };


    const t = translation[language];

    const setLanguage = (lang) => {
        setLanguageState(lang);
        try { localStorage.setItem('language', lang); } catch (e) { /* ignore */ }
    }


    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default ChangeLanguale