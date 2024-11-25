import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <>
      <Header/>
      <div className='cards-container'>
        <Hero/>
        <Projects/>
        <About />  
      </div>
      <Footer/>
    </>
  )
}

export default App
