import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Skills from './components/Skills'
import Aboutme from './components/Aboutme'
import Trainings from './components/Trainings'
import Activites from "./components/Activities"
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Aboutme />
    <Skills />
    <Trainings />
    <Activites />
    <Contact />
    </>
  );
}

export default App;
