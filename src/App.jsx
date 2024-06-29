import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Features from "./components/Features";
import { Element } from "react-scroll";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="features">
        <Features />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Footer/>
    </>
  );
}

export default App;
