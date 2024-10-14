import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
