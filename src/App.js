import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
