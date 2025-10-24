"use client";

import React from "react";

const ContactForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id="contact-form">
      <div className="row">
        <div className="col-md-12">
          <div className="tp-contact-input">
            <input name="name" type="text" placeholder="Tu nombre" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="tp-contact-input">
            <input name="email" type="email" placeholder="Correo electrónico" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="tp-contact-input">
            <textarea name="message" placeholder="Mensaje aquí"></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <div className="tp-contact-breadcrumb-btn">
            <button type="submit" className="tp-btn">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
