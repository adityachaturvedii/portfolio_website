import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Experience } from './components/Experience'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
    </div>
  )
}

export default App
