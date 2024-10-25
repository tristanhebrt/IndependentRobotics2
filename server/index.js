require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // If you have a public folder for static files

// Serve index.html on the root path
app.get('/', (req, res) => {
    console.log('Root path accessed'); // Log when the root path is accessed
    res.sendFile(path.join(__dirname, 'index.html'));
});

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/api/preorder', (req, res) => {
    const { 'first-name': firstName, 'last-name': lastName, email, product, quantity, address, message, preOrderFeeHidden } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'tristanhebrt@gmail.com', // Replace with your actual recipient email
        subject: 'New Pre-Order Submission',
        text: `
            You have a new pre-order!

            Name: ${firstName} ${lastName}
            Email: ${email}
            Product: ${product}
            Quantity: ${quantity}
            Address: ${address}
            Message: ${message || 'No additional message'}
            Pre-Order Fee: $${preOrderFeeHidden}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.json({ message: 'Pre-order received and email sent!' });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
