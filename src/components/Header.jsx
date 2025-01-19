import { Link } from "react-router-dom"

// ASSETS
import './Header.css'
import logo from '../assets/dnc-logo.svg'

function Header(){
    return (
        <header>
            <div className="container">
                <div className="alo-center d-flex jc-space-between">
                    <Link to="/"><img src={logo}/></Link>
                </div>
            <nav>
                <ul className="d-flex">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                </ul>
            </nav>
            </div>

        </header>


    )
    
}

export default Header