import './App.css';
import Navbar from './components/navbar';
import Home from './components/home'; 
import Predict from './components/predict';
import Stats from './components/stats';
import About from './components/about';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="predict" element={<Predict/>}/>
          <Route path="stats" element={<Stats/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
