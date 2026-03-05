import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ScrollToTop from './components/Scroll'
import Research from './pages/Research'
import CybersecurityProjects from './blogs/cybersecurity-project'
import IoTRoboticsProjects from './blogs/Iot-Robotics'
export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/cybersecurity-project" element={< CybersecurityProjects/>} />
        <Route path="/projects/iot-robotics-project" element={< IoTRoboticsProjects/>} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}


