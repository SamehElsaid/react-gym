import "./App.css";
import Cosh from "./components/Cosh/Cosh";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import JoinUs from "./components/JoinUs/JoinUs";
import Program from "./components/Program/Program";
import Reasons from "./components/Reasons/Reasons";
import Testim from "./components/Testim/Testim";

function App() {

  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Testim/>
      <Cosh/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
