import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation.js';
import Banner from './components/banner.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div className="App">
    <Navigation />
    <Banner />
    <Skills />
    <Projects />
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
