import styles from './Contact.module.css'

function Contact(){
    const emailHref = "mailto:independencerobotics@gmail.com";
    const instagramHref = "https://www.instagram.com/independenceroboticsinc/";
    const linkedinHref = "https://www.linkedin.com/company/independence-robotics/posts/?feedView=all";

    const instagramLogo = './src/assets/contact/instagramLogo.png';
    const linkedinLogo = './src/assets/contact/linkedinLogo.png';
    const emailLogo = './src/assets/contact/emailLogo.png';

    return(

        <div className={styles.contactContainer}>
            <div className={styles.titleContainer}>
                <h1>We'd Love To Hear From You!</h1>
            </div>
            <div className={styles.textContainer}>
                <p>Whether you have questions, feedback, or need support, our team is here to help. Please feel free to reach out to us using any of the following contact options:</p>
                <a href={emailHref}><img src={emailLogo}/></a>
                <a href={instagramHref}><img src={instagramLogo}/></a>
                <a href={linkedinHref}><img src={linkedinLogo}/></a>
            </div>
        </div>
    );
}

export default Contact