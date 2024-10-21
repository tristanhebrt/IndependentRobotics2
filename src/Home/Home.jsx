import { useState } from 'react'
import styles from './Home.module.css'

import Header from "../Header/Header.jsx"
import InfoCard from "../InfoCard/InfoCard.jsx"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className={styles.title}>
        <h1>Independence Robotics</h1>
        <h2>Empowering independence with assistive robotics</h2>
      </div>
      <InfoCard title="Unmatched Affordability" text="Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function."/>
      <InfoCard title="Unmatched Affordability" text="Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function."/>
      <InfoCard title="Unmatched Affordability" text="Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function."/>
    </>
  )
}

export default Home
