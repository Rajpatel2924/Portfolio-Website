import { Navigation, Hero, Projects, Skills, Contact, Footer, ReactBitsAurora } from './components'
import './App.css'

function App() {
  return (
    <>
      <ReactBitsAurora />
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
