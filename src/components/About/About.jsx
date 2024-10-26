import styles from './About.module.css'
import AboutCard from './AboutCard.jsx'

function About(){
    const demoImg = './src/assets/about/IndependenceRoboticsDemo.jpg';

    const aboutCards = [ 
        {id: 1, 
            img:'./src/assets/about/IndependenceRoboticsRafael.jpg', 
            name: "Rafael Hebert", 
            role: "Mechanical", 
            major: "Mechanical Eng"},

        {id: 2, 
            img:'./src/assets/about/IndependenceRoboticsLaila.jpg', 
            name: "Laila Burns", 
            role: "Business & Marketing", 
            major: "Software Eng, Eng Management"},

        {id: 3, 
            img:'./src/assets/about/IndependenceRoboticsEvan.jpg', 
            name: "Evan Zeglinski-Spinney", 
            role: "Electrical", 
            major: "Comp Sci, Electrical Eng"},

        {id: 4, 
            img:'./src/assets/about/IndependenceRoboticsLucy.jpg', 
            name: "Lucy Amina", 
            role: "Software", 
            major: "Comp Sci, Electrical Eng"},
    ]
    
    return(
        <div className={styles.aboutContainer}>
            <div className={styles.infoContainer}>
                <h1>Our Story</h1>
                <div className={styles.textContainer}>
                    <p>Independence Robotics started as a simple co-op project, aiming to assist people with disabilities in leading more independent lives. What began as a student initiative soon turned into a mission-driven venture when we realized the potential impact of our creation.</p>
                    <p>We saw a need for an affordable, reliable solution that would give people the freedom to navigate their lives confidently. That’s how Independence Robotics was born—with a vision to create accessible assistive technology for everyone. Today, we strive to provide life-changing solutions, one innovative product at a time.</p>
                </div>
                
            </div>
            <img className={styles.demoImg} src={demoImg}/>
            <div className={styles.infoContainer}>
                <h1>Our Team</h1>
                <div className={styles.textContainer}>
                    <p>Meet the passionate individuals behind Independence Robotics. Our team is dedicated to advancing assistive technology and empowering individuals to live more independently.</p>
                    <p>Each member brings unique expertise and a shared commitment to making a difference.</p>
                </div>
            </div>
            <div className={styles.teamCardsContainer}>
                <AboutCard cards={aboutCards}/>
            </div>
        </div>
    );
}

export default About