import './Button.css'
import Seta from "../../assets/Vector.png"


function Button({ arrow, buttonStyle, loading, children, ...props }){
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={Seta} />}
            
        </button>


    )
    
}

export default Button