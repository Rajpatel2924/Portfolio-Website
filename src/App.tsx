import { Navigation, Hero, Projects, Skills, Contact, Footer } from './components'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
