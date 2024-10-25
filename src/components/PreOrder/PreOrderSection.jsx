import styles from './PreOrder.module.css'
import PreOrderForm from './PreOrderForm.jsx'

function PreOrderSection(){
    const title1 = "Pre Order Available Now!";
    const text1 ="We're excited to offer you the opportunity to pre-order the Claw E 1.0 at an exclusive discounted price. By pre-ordering, you'll not only be among the first to experience our latest innovation but also enjoy a significant discount!"

    const title2 = "Why Pre-Order?"
    const text2 = [
        "Exclusive Early Access: Be one of the first to own the Claw E 1.0 before it officially launches.",
        "Special Discount: Pre-order now to receive a $1,000 discount on the regular retail price. Instead of $5,000, you can secure your Claw E 1.0 for just $4,000.",
        "Affordable Pre-Order Fee: Lock in your pre-order for just $250. Plus, you can request a refund at any time before the product's official release.",
    ]

    const title3 = "Important Information"
    const text3 = [
        "Discounted Price: Pre-order now to get Claw E 1.0 for $4,000, a $1,000 discount off the regular price of $5,000.",
        "Pre-Order Fee: Reserve your pre-order with a $250 fee, refundable at any time before the product's official release.",
        "Shipping Information: Pre-orders will be shipped as soon as the product becomes available. We will notify you of any updates or changes to the shipping schedule.",
        "Refund Policy: You can request a full refund of your pre-order fee at any time before the official release.",
    ]

    return(
        <div className={styles.textContainer}>
            <h1>{title1}</h1>
            <p>{text1}</p>
            <div className={styles.mainTextSection}>
                <div className={styles.textSection}>
                    <h2>
                        {title2}
                    </h2>
                    <ol>
                        {text2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                    <h2>
                        {title3}
                    </h2>
                    <ol>
                        {text3.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
                <PreOrderForm />
            </div>
        </div>
    );
}
export default PreOrderSection;