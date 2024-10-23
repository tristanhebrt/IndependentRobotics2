import { useState } from 'react'
import styles from './Home.module.css'

import Header from '../components/Header/Header.jsx'
import HomeTitle from '../Home/HomeTitle/HomeTitle.jsx'
import InfoCard from '../components/InfoCard/InfoCard.jsx'
import HomeText1 from '../Home/HomeText1/HomeText1.jsx'

import ModelView from '../components/ModelView/ModelView.jsx'

function Home() {
  const prosCards = [
    { id: 1, title: "Unmatched Affordability", description: "Get the best assistive technology on the market at a price that delivers exceptional value, without compromising on quality or function." },
    { id: 2, title: "Empowering independence", description: "Regain control over daily tasks, from grabbing drinks to reaching the TV remote. Independence Robotics gives you the freedom to move and act how you choose." },
    { id: 3, title: "Effortless app navigation", description: "Seamlessly guide the robot using an easy-to-use app, allowing you to move it precisely where you need it, tailored to your unique needs and mobility." },
  ];

  const technologyCards = [
    { id: 1, title: "Customizable controls", description: "The robot can be operated from up to 100 feet away, making it flexible and convenient for various home settings. It is compatible with a range of devices, ensuring users can choose the control method they are most comfortable with." },
    { id: 2, title: "Live camera feed", description: "The robot is equipped with a high-definition camera that broadcasts a 30fps live feed from its point of view. This feature provides users with real-time visuals, enhancing control and interaction with the robot." },
    { id: 3, title: "Versatile mobility", description: "Our robotic arm is engineered to navigate around homes with ease, allowing it to retrieve objects and perform simple tasks. Its mobility ensures that users can have the assistance they need right where they need it." },
    { id: 4, title: "Intuitive user interface", description: "We've invested heavily in developing a user-friendly interface that enables effortless interaction with the robot. Whether using a mobile phone, joystick, or any other compatible device, users can control the robotic arm with confidence and ease." },
    { id: 5, title: "Safety & comfort", description: "Our robot incorporates rigorous safety features designed to protect users and enhance their comfort. The arm's design ensures safe operation while performing tasks, and its various safety mechanisms are continuously tested to meet high standards." },
    { id: 6, title: "Load capacity & battery life", description: "Capable of carrying up to 10 pounds, the robotic arm is built to handle a variety of tasks. It also boasts a battery life of up to 12 hours, ensuring extended use without frequent recharging." },
    { id: 7, title: "Cost-effective solution", description: "Our mobile robotic arm is 10 times more affordable than other assistive robots on the market, making advanced assistive technology accessible to a broader audience." },
    { id: 8, title: "Reach & flexibility", description: "With a reach of 0-4 feet, the robotic arm is ideal for accessing a wide range of locations around the home." },

  ];
  
  return (
    <>
      <Header/>
      <HomeTitle
        title="Independence Robotics" 
        text="Empowering independence with assistive robotics"/>
      <div className={styles.infoCardContainer1}>
        <InfoCard cards={prosCards} flexDirection="row" justifyContent="center" scrollable={false}/>
      </div>
      <div className={styles.row}>
        <HomeText1 
          title="How Independence Robotics is making a difference"
          text="We empower individuals with limited mobility by enabling them to complete simple tasks, such as retrieving objects and navigating their home. Through intuitive app controls, our assistive robot provides the freedom to take control of daily life, promoting greater independence and self-reliance."
          button="Learn more"
          buttonLink="technology.html"
        />
        <div className={styles.robotContainer}>
          <ModelView modelUrl='./models/independenceRoboticsRobot.glb'/>
        </div>
      </div>
      <div className={styles.technologyCardsContainer}>
        <div id="technologyTitle" className={styles.sectionTitle}>Our Technology</div>
        <InfoCard cards={technologyCards} flexDirection="row" justifyContent="left" scrollable={true}/>
      </div>
    </>
  )
}

export default Home
