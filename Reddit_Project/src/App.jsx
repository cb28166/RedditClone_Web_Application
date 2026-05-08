import { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import LeftSide from './components/LeftSide/LeftSide.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import RightSide from './components/RightSide/RightSide.jsx';

function App() {

  return (
    <>
      <NavBar />
      <section className="layout">
        <div className='sideLeft'>
          <LeftSide/>
        </div>
        <div className='middle'>
          <MainSection/>
        </div>
        <div className='sideRight'>
          <RightSide/>
        </div>
      </section>
    </>
  )
}

export default App
