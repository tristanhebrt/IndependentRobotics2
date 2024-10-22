import styles from './HomeTitle.module.css'

function HomeTitle(
    {title = "Missing title",
    text = "Missing text",}
){
    return(
        <div className={styles.title}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
} 
export default HomeTitle