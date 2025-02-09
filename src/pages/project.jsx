import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import ProjectsList from "../components/ProjectList/ProjectsLists";


function Projects(){
    return(
        <>
            <Header/>
            <Banner title="Projects" image="projects.jpg   "/>
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects