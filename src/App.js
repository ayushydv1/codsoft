import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
