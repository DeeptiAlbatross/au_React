import './App.css';
import Header from "./components/header";
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Statics from './components/statics';
import Heading from "./components/headingContact";

function App() {
  return (
    <div className="App">
      <Heading/>
     <Header/>
     <Hero/>
     <About/>
     <Contact/>
     <Statics/>
    </div>
  );
}

export default App;
