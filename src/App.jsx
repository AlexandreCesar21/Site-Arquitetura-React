import { useContext } from 'react' 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import About  from './pages/about'
import Contact  from './pages/contact'
import Project  from './pages/project'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// UTILS
import ScrollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const { loading } = useContext(AppContext)
  
  if(loading){
    return <LoadingSpinner/>
  }
  
    return (
      <Router>  
      <ScrollToTop/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
