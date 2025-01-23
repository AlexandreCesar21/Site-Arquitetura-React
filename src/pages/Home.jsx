import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";


function Home(){
    return(
        <>
            <Header/>
            <h1>titulo</h1>
            <p>sub</p>
            <Button buttonStyle="secondary" arrow>OLá</Button>
            <div className="container">
                <Hero/>
            </div>
            <Footer/>
        </>
    )
}

export default Home