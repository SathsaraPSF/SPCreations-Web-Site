import "./App.css";
import Header from "./Components/Hero/Header";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/our-services/Service";
import { OurPackage } from "./Components/our_packages/OurPackage";
import { Contact } from "./Components/Contacts/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <OurPackage />
      <Contact />
    </div>
  );
}

export default App;
