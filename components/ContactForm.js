'use client'; // 👈 this makes the component interactive (Client Component)

import { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    const res = await fetch('/api/contact', {
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

    setSubmitting(false);

    if (res.ok) {
      alert('Message sent!');
      e.target.reset();
    } else {
      alert('Failed to send message.');
    }
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
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <div className="contact-three__btn-box">
            <button type="submit" className="thm-btn contact-three__btn" disabled={submitting}>
              {submitting ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
