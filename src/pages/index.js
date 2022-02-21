import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import Secondary from '../components/Secondary';
import Clients from '../components/Clients';
import Social from '../components/Social';
import About from '../components/About';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Social />
      <Secondary toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Banner />
      <Clients />
      <About />
    </>
  );
}

export default Home;