import { useState } from 'react'
import styles from './Home.module.css'

import Header from "../Header/Header.jsx"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className={styles.title}>
        <h1>Independence Robotics</h1>
        <h2>Empowering independence with assistive robotics</h2>
      </div>
      
    </>
  )
}

export default Home
