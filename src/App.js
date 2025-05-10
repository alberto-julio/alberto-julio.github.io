import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//https://drive.google.com/file/d/1-eE8It6KQYYy4X6tF3t82NSQpH5OFavd/view?usp=sharing
function App() {
  return (
    <div className="App">
      {/* Wrap your application in the Router */}
      <Router>
        <Navbar />

        {/* Define Routes for different components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

