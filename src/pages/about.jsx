import AboutText from "../components/AboutText/AboutText";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";


function about(){
    

    return(
        <>
            <Header/>
            <Banner title="Abouth" image="about.jpg"/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer/>
        </> 
    )
}

export default about