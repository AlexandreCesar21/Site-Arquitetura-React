import { useState, useEffect, useContext } from "react"
import "./ProjectsLists.css"

// ASSETS 
import Like from '../../assets/like.svg'
import LikePrenchido from '../../assets/like_prenchido.svg'

// COMPONENTS
import Button from "../Button/Button"

// CONTEXT
import { getApiData } from "../../services/apiService"

// UTILS
import { AppContext } from "../../contexts/AppContext"

function ProjectsList(props) {
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProject] = useState([])
    const { language, languages, loading } = useContext(AppContext);
    
    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('FavProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }



    const defaultProjetc = {
        br: "Acompanhe Nossos Projetos",
        en: "Follow Our Projects"
    }
    
    if (loading || !languages || !languages[language]) {
        return <p>Carregando...</p>;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
               setProjects([])
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProject(savedFavProjects)
        }
    })


    return (
        <div className="projects-section">
            <div className="projects-hero">
            <h2>{languages[language]?.ProjectsList?.title || defaultProjetc[language] || defaultProjetc.en}</h2>

            <p>
            {languages[language]?.ProjectsList?.subtitle || 
                    (language === "br" ? "É um fato conhecido que um leitor se distrai facilmente com o conteúdo legível de uma página ao analisar seu layout." : 
                    "It is a long established fact that a reader will be distracted by the of readable content of page looking at its layouts points.")}
            </p>

            </div>            
            <div className="projects-grid">
                {
                    projects ? 
                    projects.map((project) => (
                        <div className="project-card d-flex jc-center al-center fd-column" key={project.id}> 
                            <div className="thumb tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
                                <img src={favProjects.includes(project.id) ? LikePrenchido : Like} height="20px"/>
                            </Button>
                        </div>
                    )) 
                : 
                null
                }
            </div>
        </div>
    )
}

export default ProjectsList