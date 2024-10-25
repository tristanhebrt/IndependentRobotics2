import styles from './HomeText.module.css'

function HomeText1(){
    const title="How Independence Robotics is making a difference"
    const text="We empower individuals with limited mobility by enabling them to complete simple tasks, such as retrieving objects and navigating their home. Through intuitive app controls, our assistive robot provides the freedom to take control of daily life, promoting greater independence and self-reliance."
    const button="Learn more"
    const buttonLink="technology.html"
    
    return(
        
        <div className={styles.textContainer}>
            <h1>{title}</h1>
            <p>{text}</p>
            <button onClick={() => window.location.href = buttonLink}>{button}</button>
        </div>
    );
} 
export default HomeText1