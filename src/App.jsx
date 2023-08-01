//import './App.css'
import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import AboutInfo from './AboutInfo.jsx';
import AboutJobs from './AboutJobs.jsx';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about/" element={<About/>}>
            <Route index element={<AboutInfo/ >}></Route>
            <Route path="me" element={<AboutInfo/ >}></Route>
            <Route path="experience" element={<AboutJobs/ >}></Route>
          </Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)