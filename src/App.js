import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Intro from './Components/Intro/Intro';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      
    </div>
  );
}

export default App;
