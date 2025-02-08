import { useState, useEffect, useContext } from "react"
import "./ProjectsLists.css"

// ASSETS 
import Like from '../../assets/like.svg'
import LikePrenchido from '../../assets/like_prenchido.svg'

// UTILS
import { getApiData } from "../../services/apiService"
import { AppContext } from "../../contexts/AppContext"

function ProjectsList(props) {
    const [projects, setProjects] = useState([])
    
    const { language, languages, loading } = useContext(AppContext);

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

/* <h2>Follow Our Projects</h2>

    <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
    
    {languages[language]?.ProjectsList?.subtitle || defaultProjetc[language] || defaultProjetc.en}
    */


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
                            <img src={LikePrenchido} height="20px"/>
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