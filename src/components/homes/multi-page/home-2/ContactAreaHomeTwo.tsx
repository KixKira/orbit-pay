'use client';

import React from 'react';
import Image from 'next/image';
import counter_img from '@/assets/img/contact/contact-1.jpg';
import ContactFormHomeTwo from '@/components/forms/ContactFormHomeTwo';

const ContactAreaHomeTwo = () => {
  return (
    <>
      <section id="contact-one-page" className="tp-contact-area p-relative pt-120 fix" >
        <div className="container">
          <div className="tp-contact-bg" style={{ backgroundImage: "url(/assets/img/contact/bg.png)" }}></div>
          <div className="tp-contact-overlay"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-contact-wrapper">
                <h3 className="tp-contact-title">Get in touch</h3>
                <ContactFormHomeTwo />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-contact-thumb-wrapper wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <Image src={counter_img}   alt="image-title-here" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAreaHomeTwo;