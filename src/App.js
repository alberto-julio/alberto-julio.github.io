import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Broken from './components/Broken';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// function Navbar() {
//   return (
//     <div>

//     </div>
//   );
// }


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
          <Route path='/broken' element={<Broken />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
