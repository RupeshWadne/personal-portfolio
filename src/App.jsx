import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Work from './components/work/Work'
// import Blog from './components/blogs/Blog'
// import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        {/* <Blog/> */}
        {/* <Qualification /> */}
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </div>
  )
}

export default App
