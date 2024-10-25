import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './PreOrder.module.css';

// Function to send the pre-order email using EmailJS
async function sendPreOrder(event, setLoading, setSuccess, setError) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('Submitting form with data:', data);

    setLoading(true);
    setError(null);
    console.log('Loading state set to true');

    try {
        console.log('Sending email using EmailJS');
        const response = await emailjs.send(
            'service_kibaglo', // Replace with your EmailJS service ID
            'template_9zazglu', // Replace with your EmailJS template ID
            data,               // The form data to be sent
            'ukfCZ0yEwUnQ-vYs5' // Replace with your EmailJS user ID
        );

        console.log('Email sent successfully:', response);
        setSuccess('Your pre-order has been successfully submitted!');
        event.target.reset(); // Reset the form fields
    } catch (error) {
        console.error('Error during email submission:', error);
        setError('There was an error submitting your pre-order. Please try again.');
    } finally {
        setLoading(false);
        console.log('Loading state set to false');
    }
}

function PreOrderForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [preOrderFee, setPreOrderFee] = useState(250); // State for pre-order fee

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    // Update pre-order fee when quantity changes
    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity);
        setPreOrderFee(newQuantity * 250); // Update fee based on quantity
    };

    return (
        <div className={styles.preOrderformContainer}>
            <form onSubmit={(e) => sendPreOrder(e, setLoading, setSuccess, setError)} className={styles.preOrderForm}>
                <h2>Pre-Order Form</h2>
                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" required autoComplete="given-name" />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" required autoComplete="family-name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required autoComplete="email" />
                </div>
                <div>
                    <label htmlFor="product">Choose Product:</label>
                    <select id="product" name="product" required>
                        <option value="claw-e-1.0">Claw E 1.0</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="10"
                        required
                        value={quantity} // Controlled component
                        onChange={handleQuantityChange} // Update state on change
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required autoComplete="address-line1" />
                </div>
                <div>
                    <label htmlFor="message">Additional Message (optional):</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <div>
                    <label htmlFor="preOrderFee">Pre-Order Fee:</label>
                    <input type="text" id="preOrderFee" name="preOrderFee" value={`$${preOrderFee}`} disabled /> {/* Display the fee */}
                    <input type="hidden" id="preOrderFeeHidden" name="preOrderFeeHidden" value={preOrderFee} />
                </div>
                <div>
                    <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Pre-Order Now'}</button>
                </div>
                {success && <p className={styles.successMessage}>{success}</p>}
                {error && <p className={styles.errorMessage}>{error}</p>}
            </form>
        </div>
    );
}

export default PreOrderForm;
