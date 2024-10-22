import styles from './HomeText1.module.css'

function HomeText1(
    {title = "Missing title",
    text = "Missing text",
    button = "Missing text",}
){
    return(
        <div className={styles.textContainer}>
            <h1>{title}</h1>
            <p>{text}</p>
            <button>{button}</button>
        </div>
    );
} 
export default HomeText1