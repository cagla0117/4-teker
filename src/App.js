import React from "react";
import {  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/:slug" element={<Detail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
