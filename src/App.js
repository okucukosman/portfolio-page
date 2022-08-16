import React from "react";
import Background from './components/Background'
import Navbar from './components/navbar'
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <Background>
      <Navbar/>
      <About></About>
      <Projects></Projects>
    </Background>
  );
}

export default App;
