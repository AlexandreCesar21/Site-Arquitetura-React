import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/apiService";

// Criando e exportando AppContext corretamente
export const AppContext = createContext(); 

export const AppProvider = ({ children }) => { 
    const servedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(servedLanguage ?? 'br');
    const [languages, setLanguages] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const getTexts = await getApiData('webtext');
                setLanguages(getTexts);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchLanguages();
    }, []);


    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language])  

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children} 
        </AppContext.Provider>
    );
};
