import { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {

  return (
    <>
      <NavBar />
      <section className="layout">
          <h1>left Side</h1>
          <h1>Main Section</h1>
          <h1>Right side</h1>
      </section>
    </>
  )
}

export default App
