import { useContext } from 'react';
import './AboutText.css'
import { AppContext } from "../../contexts/AppContext";

function AboutText(){

const { language, languages, loading } = useContext(AppContext);

const defaultProjetc = {
    br: "Definimos as tendências dos serviços de vida moderna.",
    en: "We set the trends of modern living Services."
}



if (loading || !languages || !languages[language]) {
    return <p>Carregando...</p>;
}

const title = languages[language]?.AboutText?.title || defaultProjetc[language] || defaultProjetc.en

const paragrafo1 = languages[language]?.AboutText?.paragrafo1 || 
(language === "br" ? "É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página" 
    : "It is a long established fact that a reader will be distracted by the of readable content of a page")


const paragrafo = languages[language]?.AboutText?.paragrafo2 ||
(language === "br" ? "ao olhar para seus layouts os pontos surgem usando que ele tem um aspecto mais menos normal. Uma serenidade maravilhosa tomou posse de toda a minha alma, como estas doces manhãs de primavera que desfruto de todo o coração. Estou sozinho e sinto o encanto da existência neste local, que foi criado para a felicidade de almas como a minha." :
    "when lookings at its layouts the points spriof using that it has a more less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine."
)






return(
    
    <div className="container">
        <div className="text-section-text d-flex">
            <div className="text-section-text">
                    <h2> 
                         {title}   
                    </h2>
            </div>
            <div className="text-section-text">
                <p className="primary-color">
                    {paragrafo1}
                </p>
                <p>{paragrafo}</p>
                <p>{paragrafo}</p>
            </div>
        </div>
    </div>
    
)
}

export default AboutText