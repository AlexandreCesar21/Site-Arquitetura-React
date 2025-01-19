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
                <div className="alo-center d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={logo}/>
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
                </div>
            </div>
        </footer>
    )
}


export default footer