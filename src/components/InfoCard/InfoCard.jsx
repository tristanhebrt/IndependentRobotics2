import styles from './InfoCard.module.css';

function InfoCard({cards=[]}) {

    const cardContent = cards.map(item => (
        <div key={item.id}>
            <div className={styles.infoCard}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        </div>
    ));

    return (
        <div className={styles.infoCardContainer}>{cardContent}</div>
    );
}

export default InfoCard;