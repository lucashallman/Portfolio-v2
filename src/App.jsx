import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import { ThemeContext } from './components/ThemeContext.jsx';

//Component imports
import PageHeader from './components/pageHeader.jsx';
import PageFooter from './components/pageFooter.jsx';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <header>
        <PageHeader />
      </header>
      <div className='bottomflex'>
      <main>
        <Outlet />
      </main>
      <footer>
        <PageFooter />
      </footer>
      </div>
    </div>
  )
}

export default App
