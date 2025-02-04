import { useState, useEffect } from "react";
import "./ContactForm.css";

// COMPONENTS
import Button from "../Button/Button";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        setFormSubmitLoading(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: "9754f4a0-4cb4-48cb-b9c9-50e5d5867bc3"
                })
            });

            const result = await response.json();

            if (response.ok) {
                setFormSubmitted(true);
                setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
            } else {
                alert("Erro ao enviar: " + result.message);
            }
        } catch (error) {
            alert("Erro: " + error.message);
        } finally {
            setFormSubmitLoading(false);
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValid =
            formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim();

        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="d-flex form-group">
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder="Mensagem *"
                        onChange={handleChange}
                        value={formData.message}
                        rows="4"
                    ></textarea>
                </div>
                <div className="al-center d-flex jc-end form-group">
                    {formSubmitted && <p className="text-primary">Sucesso!</p>}
                    <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>
                        {formSubmitLoading ? "Enviando..." : "Enviar"}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
