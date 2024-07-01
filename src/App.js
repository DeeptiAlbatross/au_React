import './App.css';
import Header from "./components/header";
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
