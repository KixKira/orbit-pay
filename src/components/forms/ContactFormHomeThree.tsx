'use client'
import React from 'react';

const ContactFormHomeThree = () => {
  return (
    <>
      <form  id="contactForm" className="tp-contact-form-2" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-input">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-input">
              <input type="text" className="form-control" placeholder="Phone Number" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-input">
              <input type="email" className="form-control" placeholder="E-mail" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-input">
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-input">
              <button type="submit" className="tp-btn">Send Message</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeThree;