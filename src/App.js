import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import About1 from './Components/About/About1'
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Intro from './Components/Intro/Intro';
import Footer from './Components/Footer/Footer';
import{BrowserRouter}from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
    <div className="App">
  

      <Navbar/>
      <Home/>
      <Intro/>
      <About/>
      <About1/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
 </BrowserRouter>
  );
}

export default App;
