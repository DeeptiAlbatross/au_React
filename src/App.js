import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Statics from "./components/statics";
import Heading from "./components/headingContact";
import Services from "./components/services";
import Boxes from "./components/boxesHero";
import Team from "./components/team";

function App() {
  return (
    <div className="App">
      <Heading />
      <Header />
      <Hero />
      <Boxes />
      <About />
      <Contact />
      <Services />
      <Team />
      {/* <Statics /> */}
    </div>
  );
}

export default App;
