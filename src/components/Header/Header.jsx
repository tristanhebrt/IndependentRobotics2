import styles from './Header.module.css'

function Header(){
    const logoSrc = './src/assets/IndependenceRoboticsLogo.jpg';
    const homeLink = "#top";
    const technologyLink = "#technologyTitle";
    const aboutLink = "about.html";
    const contactLink = "contact.html";
    const preorderLink = "preorder.html";
    
    return(
        <header className={styles.header}>
            <nav>
                <ol>
                    <li><a href={aboutLink}><img src={logoSrc} alt="logo"/></a></li>
                </ol>
                <ol>
                    <li><a href={homeLink}>Home</a></li>
                    <li><a href={technologyLink}>Technology</a></li>
                    <li><a href={aboutLink}>About Us</a></li>
                    <li><a href={contactLink}>Contact Us</a></li>
                    <li><a href={preorderLink}>Pre Order</a></li>
                </ol>
            </nav>
        </header>
    );
}
export default Header