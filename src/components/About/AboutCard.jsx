import styles from './About.module.css'
import PropTypes from 'prop-types';

function AboutCard({cards = []}){
    const cardContent = cards.map(item => (
        <div key={item.id}>
            <div className={styles.aboutCard}>
                <img src={item.img}/>
                <h1>{item.name}</h1>
                <h2>{item.role}</h2>
                <p>{item.major}</p>
            </div>
        </div>
    ));
    
    return(
        <div children={cardContent} className={styles.aboutCardContainer}></div>
    );
}

AboutCard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accept both string and number
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        major: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired
};

export default AboutCard