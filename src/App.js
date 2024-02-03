import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
