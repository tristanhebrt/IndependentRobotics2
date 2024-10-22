import styles from './InfoCard.module.css'

function InfoCard(
    {title = "Missing title",
    text = "Missing text",}
){
    return(
        <div className={styles.infoCardContainer}>
            <div className={styles.infoCard}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default InfoCard