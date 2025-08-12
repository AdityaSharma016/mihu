import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsMihu from './components/WhatIsMihu';
import Highlights from './components/Highlights';
import Steps from './components/Steps';
import FAQ from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsMihu />
      <Highlights />
      <Steps />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
