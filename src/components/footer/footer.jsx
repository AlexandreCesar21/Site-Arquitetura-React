import { useContext } from "react";
import { Link } from "react-router-dom";

// ASSETS
import './footer.css';
import logo from '../../assets/dnc-logo.svg';
import brasilLogo from '../../assets/brasil.svg';
import usaLogo from '../../assets/usa.svg';
import facabookIcon from '../../assets/facebook.svg';
import instgramIcon from '../../assets/instagram.svg';
import linkdinIcon from '../../assets/linkdin.svg';
import twiterIcon from '../../assets/twiter.svg';

// COMPONENT
import Button from "../Button/Button";

// CONTEXT
import { AppContext } from "../../contexts/AppContext";

function Footer() {
    const { language, languages, setLanguage } = useContext(AppContext);

    // Verifica se os dados estão carregados antes de renderizar o conteúdo
    if (!languages) return <p>Loading...</p>;

    // Função para alterar o idioma
    const changeLanguage = (country) => {
        setLanguage(country);
    };

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={logo} className="footer-logo" alt="Logo" />
                        <p className="grey-1-color">{languages[language]?.general?.footerLogoText || "Texto padrão"}</p>   
                        <div className="d-flex social-links">
                            <a href="">
                                <img src={facabookIcon} alt="Facebook" />
                            </a>
                            <a href="">
                                <img src={twiterIcon} alt="Twitter" />
                            </a>
                            <a href="">
                                <img src={linkdinIcon} alt="LinkedIn" />
                            </a>
                            <a href="">
                                <img src={instgramIcon} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{languages[language]?.general?.pages}</h3>
                            <ul>
                                <li><Link to='/'>{languages[language]?.menu?.home}</Link></li>
                                <li><Link to='/about'>{languages[language]?.menu?.about}</Link></li>
                                <li><Link to='/contact'>{languages[language]?.menu?.projects}</Link></li>
                                <li><Link to='/project'>{languages[language]?.menu?.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{languages[language]?.menu?.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={brasilLogo} alt="Brasil" height="29px" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={usaLogo} alt="EUA" height="29px" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
