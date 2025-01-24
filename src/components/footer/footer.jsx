import { Link } from "react-router-dom"

// ASSETS
import './footer.css'
import logo from '../../assets/dnc-logo.svg'
import brasilLogo from '../../assets/brasil.svg'
import usaLogo from '../../assets/usa.svg'
import facabookIcon from '../../assets/facebook.svg'
import instgramIcon from '../../assets/instagram.svg'
import linkdinIcon from '../../assets/linkdin.svg'
import twiterIcon from '../../assets/twiter.svg'


function footer() {
    return(
        <footer>
            <div className="container">
                <div className=" d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={logo} className="footer-logo"/>
                        <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>   
                        <div className="d-flex social-links">
                            <a href="">
                                <img src={facabookIcon} alt="" />
                            </a>
                            <a href="">
                                <img src={twiterIcon} alt="" />
                            </a>
                            <a href="">
                                <img src={linkdinIcon} alt="" />
                            </a>
                            <a href="">
                                <img src={instgramIcon} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul >
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/project'>Project</Link></li>
                            </ul>
                        </div>
                    <div className="footer-col">
                        <h3>Contact</h3>
                        <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                        <p className="grey-1-color">suporte@escoladnc.com.br</p>
                        <p className="grey-1-color">(19) 99187-4342</p>
                    </div>
                </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <img src={brasilLogo} alt="" height="29px"/>
                        <img src={usaLogo} alt="" height="29px"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default footer