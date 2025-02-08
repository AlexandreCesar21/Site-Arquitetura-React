import { useContext, useState } from "react"
import { Link } from "react-router-dom"

// ASSETS
import './Header.css'
import logo from '../../assets/dnc-logo.svg'

// COMPONENTS
import Button from "../Button/Button"
import { AppContext } from "../../contexts/AppContext"


function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    const { language, languages, loading } = useContext(AppContext)
    
    return (
        <header>
            <div className="container">
                <div className="alo-center d-flex jc-space-betwe en">
                    <Link to="/"><img src={logo}/></Link>
                <div className="mobile-menu">
                    <Button buttonStyle="secondary" onClick={toggleMenu}>
                        Menu
                    </Button>
                </div> 

                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu} >
                             X
                        </Button>
                        <ul className="d-flex">
                            <li><Link to='/'>{languages[language]?.menu?.home}</Link></li>
                            <li><Link to='/about'>{languages[language]?.menu?.about}</Link></li>
                            <li><Link to='/contact'>{languages[language]?.menu?.contact}</Link></li>
                            <li><Link to='/project'>{languages[language]?.menu?.projects}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>


    )
    
}

export default Header