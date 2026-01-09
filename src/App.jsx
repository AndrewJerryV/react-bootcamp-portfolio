import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FigmaDesigns from './components/FigmaDesigns'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            {/* Animated Background */}
            <div className="animated-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <FigmaDesigns />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
