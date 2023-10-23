
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
     <Skills />
     <Contact />
    </div>
  );
}

export default App;
