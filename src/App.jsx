import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import About  from './pages/about'
import Contact  from './pages/contact'
import Project  from './pages/project'

// UTILS
import ScrollToTop from './utils/ScrollTop'


function App() {
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
