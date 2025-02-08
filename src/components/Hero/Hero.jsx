import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Button from "../Button/Button";
import { AppContext } from "../../contexts/AppContext";

function Hero() {
    const { language, languages, loading } = useContext(AppContext);

    if (loading || !languages || !languages[language]) {
        return <p>Carregando...</p>;
    }

    console.log("Hero data:", languages[language].hero); // Verifica se 'hero' tem a chave 'button'


    const defaultButtonTexts = {
        br: "Saiba mais",
        en: "Learn more"
    };


    return (
        <div className="hero d-flex al-center">
            <div className="hero-text">
                <h1>{languages[language].hero.title}</h1>
                <p>{languages[language].hero.subtitle}</p>
                <Link>
                    <Button buttonStyle="primary">
                    {languages[language].hero.button || defaultButtonTexts[language] || "More info"} 
                    </Button>
                </Link> 
            </div>            
        </div>
    );
}

export default Hero;
