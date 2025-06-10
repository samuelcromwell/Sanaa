'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  function validateForm(formData) {
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      return 'Please fill in all required fields.';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const form = e.target;
    const formData = new FormData(form);
    const validationError = validateForm(formData);

    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      setSubmitting(false);
      return;
    }

    // Netlify requires this encoding
    const encodedData = new URLSearchParams(formData).toString();

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData,
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We shall respond shortly.' });
        form.reset();
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Try again later.' });
    }

    setSubmitting(false);
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form-validated contact-three__form"
    >
      {/* Required for Netlify form */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="text" name="name" placeholder="Your name" required />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="number" name="number" placeholder="Mobile" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="contact-three__input-box">
            <input type="text" name="location" placeholder="Location" />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="contact-three__input-box text-message-box">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>

          {/* Status message */}
          {status.message && (
            <p
              className="mt-3"
              style={{
                color: status.type === 'success' ? 'green' : 'red',
                fontWeight: 'bold',
              }}
            >
              {status.message}
            </p>
          )}

          <div className="contact-three__btn-box mt-3">
            <button
              type="submit"
              className="thm-btn contact-three__btn"
              disabled={submitting}
            >
              {submitting ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
