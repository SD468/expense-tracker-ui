import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css';
import Sidebar from './components/SideBar/Sidebar'
import AppRouter from './components/AppRouter/AppRouter'

function App() {
  

  return (
   <div className={styles.shell}>
      <aside className={styles.sidebar}><Sidebar /></aside>
      {/* <main className={styles.main}>
        <Topbar />
        <section className={styles.content}>
          <AppRouter />
        </section>
      </main> */}
    </div>
  )
}

export default App
