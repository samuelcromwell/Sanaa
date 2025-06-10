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
    setStatus({ type: '', message: '' });
    setSubmitting(true);

    const formData = new FormData(e.target);
    const validationError = validateForm(formData);

    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          number: formData.get('number'),
          location: formData.get('location'),
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We shall respond shortly.',
        });
        e.target.reset();
      } else {
        const data = await res.json();
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong.',
        });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Try again later.' });
    }

    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-validated contact-three__form">
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