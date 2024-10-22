import { useState } from 'react'
import styles from './Home.module.css'

import Header from "../Header/Header.jsx"
import HomeTitle from "../Home/HomeTitle/HomeTitle.jsx"
import InfoCard from "../InfoCard/InfoCard.jsx"
import HomeText1 from "../Home/HomeText1/HomeText1.jsx"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HomeTitle 
        title="Independence Robotics" 
        text="Empowering independence with assistive robotics"/>
      <div className={styles.infoCardContainer1}>
        <InfoCard 
          title="Unmatched Affordability" 
          text="Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function."/>
        <InfoCard 
          title="Unmatched Affordability" 
          text="Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function."/>
        <InfoCard 
          title="Unmatched Affordability" 
          text="Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function."/>
      </div>
      <HomeText1 
        title="How Independence Robotics is making a difference"
        text="Independence Robotics empowers individuals with limited mobility by enabling them to complete simple tasks, such as retrieving objects and navigating their home. Through intuitive app controls, our assistive robot provides the freedom to take control of daily life, promoting greater independence and self-reliance."
        button="Learn more"
        buttonLink="technology.html"
      />
    </>
  )
}

export default Home
