import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'

//Component imports
import PageHeader from './components/pageHeader.jsx';
import PageFooter from './components/pageFooter.jsx';

function App() {

  return (
    <>
      <header>
        <PageHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <PageFooter />
      </footer>
    </>
  )
}

export default App
