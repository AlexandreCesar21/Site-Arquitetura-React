import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import about from './pages/about'
import contact from './pages/contact'
import project from './pages/project'

// COMPONENTS
import Header from "./components/Header/Header";

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<><h1>ABOUT</h1><Link to='/'>Navegador</Link></>}></Route>
          <Route path='/projects' element={<><h1>PROJECTS</h1></>}></Route>
          <Route path='/contact' element={<><h1>CONTACT</h1></>}></Route>
      </Routes>
    </Router>
  )
}

export default App
