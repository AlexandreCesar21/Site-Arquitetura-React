import { useState, useEffect } from 'react'
import './ContactForm.css'

// COMPONENTS
import Button from "../Button/Button"



function ContactForm(){
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })    
    const [isFormValid, setIsFormValid] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(isFormValid){
            null
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email) 
        }


        const isValid = FormData.name.trim() && 
        FormData.email.trim() && 
        isValidEmail(FormData.email) && 
        FormData.message.trim()

        setIsFormValid(isValid)

    }, [FormData])

    const handleChange = (e) => {
        const {name, value } = e.target
        setFormData({
            ...FormData,
            [name]: value
        })
    }

return(
    
        <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form > 
                <div className="d-flex form-group" >
                    <input 
                        className="form-input" 
                        type="text"  
                        id="name"
                        name="name"
                        placeholder="Name *"
                        onChange={handleChange}
                    />
                    <input 
                        className="form-input" 
                        type="email"  
                        id="email"
                        name="email"
                        placeholder="Email *" 
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex form-group">
                    <textarea 
                        className="form-input"
                        id="messagem"
                        name="message"
                        placeholder="Mensagem *"
                        onChange={handleChange}
                        rows="4"  
                    ></textarea>
                </div>
                <div className="al-center d-flex jc-end form-group ">
                <Button type="submit" buttonStyle="secondary" disabled={!isFormValid}> 
                            Enviar 
                        </Button>
                </div>
            </form>
        </div>
    
)
}

export default ContactForm