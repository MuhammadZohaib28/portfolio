// EmailCopy.js
import React, { useState } from 'react';
import './jobsection.scss'; // You can create this file for additional styles
import toast from 'react-hot-toast';

const EmailCopy = ({ email }) => {
    const [message, setMessage] = useState('');

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            toast.success('Email copied!');
            setTimeout(() => setMessage(''), 2000); // Clear the message after 2 seconds
        }).catch(err => {
            console.error('Failed to copy email: ', err);
        });
    };

    return (
        <div>
            <span className="companyEmail" onClick={copyEmail}>
                {email}
            </span>
            {message && <div className="copyMessage">{message}</div>}
        </div>
    );
};

export default EmailCopy;
