import styles from './HomeText1.module.css'

function HomeText1(
    {title = "Missing title",
    text = "Missing text",
    button = "Missing button text",
    buttonLink = "Missing link",}
){
    return(
        <div className={styles.textContainer}>
            <h1>{title}</h1>
            <p>{text}</p>
            <button onClick={() => window.location.href = buttonLink}>{button}</button>
        </div>
    );
} 
export default HomeText1