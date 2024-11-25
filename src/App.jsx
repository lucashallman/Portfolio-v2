import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import { navContext } from './components/navcomponents.jsx';

//Component imports
import PageHeader from './components/pageHeader.jsx';
import PageFooter from './components/pageFooter.jsx';

function App() {
  const [count, setCount] = useState(0)
//  const [nav, setNav] = useContext(navContext);

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
