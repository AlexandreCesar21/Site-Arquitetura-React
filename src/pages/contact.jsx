import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import Footer from "../components/footer/footer";

function contact(){
    return(
        <>
            <Header/>
            <Banner title="Contact" image="Contact.jpg"/>
            <div className="container">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default contact