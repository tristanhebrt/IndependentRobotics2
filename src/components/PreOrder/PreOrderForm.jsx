import React, { useState } from 'react';
import styles from './PreOrder.module.css';

async function sendPreOrder(event, setLoading, setSuccess, setError) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('Submitting form with data:', data); // Log the data being submitted

    setLoading(true); // Set loading state to true
    setError(null);   // Reset any previous error
    console.log('Loading state set to true'); // Debug log

    try {
        console.log('Sending POST request to /api/preorder'); // Debug log
        const response = await fetch('http://localhost:5000/api/preorder', { // Match your server endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log('Received response:', response); // Log the response object

        if (!response.ok) {
            console.error('Network response was not ok:', response.statusText); // Log network error details
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result); // Log the success response
        setSuccess('Your pre-order has been successfully submitted!'); // Set success message
        event.target.reset(); // Reset the form fields
    } catch (error) {
        console.error('Error during submission:', error); // Log the error
        setError('There was an error submitting your pre-order. Please try again.'); // Set error message
    } finally {
        setLoading(false); // Set loading state to false
        console.log('Loading state set to false'); // Debug log
    }
}

function PreOrderForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

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
                    <input type="number" id="quantity" name="quantity" min="1" max="10" required />
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
                    <input type="text" id="preOrderFee" name="preOrderFee" value="$250" disabled />
                    <input type="hidden" id="preOrderFeeHidden" name="preOrderFeeHidden" value="250" />
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
