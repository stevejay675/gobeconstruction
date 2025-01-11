'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import './contact.css';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ContactForm = () => {
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ loading: false, success: true });
          setTimeout(() => setStatus({ loading: false, success: null }), 3000); // Reset after 3 seconds
        },
        (error) => {
          console.error(error.text);
          setStatus({ loading: false, success: false });
          setTimeout(() => setStatus({ loading: false, success: null }), 3000); // Reset after 3 seconds
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <form className="formContainer" onSubmit={handleOnSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Send a message
        </h2>

        {/* Name */}
        <div className="formElement">
          <label htmlFor="from_name">
            Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name.."
            required
          />
        </div>

        {/* Email */}
        <div className="formElement">
          <label htmlFor="from_email">
            Email <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your email.."
            required
          />
        </div>

        {/* Phone */}
        <div className="formElement">
          <label htmlFor="from_phone">
            Phone Number <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="tel"
            id="from_phone"
            name="from_phone"
            placeholder="Your phone number.."
            required
          />
        </div>

        {/* Message */}
        <div className="formElement">
          <label htmlFor="message">
            Message <span style={{ color: 'red' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Your message.."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="formButton" disabled={status.loading}>
          {status.loading ? (
            <FaSpinner className="spinner" />
          ) : (
            'Submit'
          )}
        </button>

        {/* Status Message */}
        {status.success === true && (
          <div className="statusMessage success">
            <FaCheckCircle /> Message sent successfully!
          </div>
        )}
        {status.success === false && (
          <div className="statusMessage error">
            <FaTimesCircle /> Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
