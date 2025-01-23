import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Home(){
    return(
        <>
            <Header/>
            <h1>titulo</h1>
            <p>sub</p>
            <Button buttonStyle="secondary" arrow>OLá</Button>
            <Banner title="Home" image="about.jpg"/>
            <Footer/>
        </>
    )
}

export default Home