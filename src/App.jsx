import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import AppRouter from './components/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SideBar />
    <main>
      <AppRouter />
    </main>
    </>
  )
}

export default App
