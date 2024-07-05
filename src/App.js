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
import Strengths from "./components/strengths";
import Clients from "./components/client";
import Testimonials from "./components/testimonials";
import JoinAU from "./components/joinAU";
import ContactForm from "./components/contactfooter";
import Footer from "./components/footer";


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
      <Statics />
      <Strengths />
      <Clients />
      <Testimonials />
      <JoinAU />
      <ContactForm />
      <Footer/>
    </div>
  );
}
export default App;
