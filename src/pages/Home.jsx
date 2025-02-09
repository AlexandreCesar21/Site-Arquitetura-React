import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ProjectsList from "../components/ProjectList/ProjectsLists";
import Footer from "../components/Footer/Footer";

function Home(){
    return(
        <>
            <Header/>
            <div className="container">
                <Hero/>
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Home