import Header from './components/Header/header';
import Home from './components/Home/home';
import Bio from './components/Bio/bio';
import Music from './components/Music/music';
import Projects from './components/Projects/projects';
import Classes from './components/Classes/classes';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css'

function App() {
    return (
        <>
        <Header />
            <main>
                <Home />
                <Bio />
                <Music />
                <Projects />
                <Classes />
                <Contact />
            </main>
        <Footer />
        </>
    )
}

export default App