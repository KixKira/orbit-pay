

import React from 'react';
import ContactFormHomeThree from '@/components/forms/ContactFormHomeThree';
import Image from 'next/image';
import contact_img from "@/assets/img/contact/home-3/img-1.jpg";

const ContactAreaHomeThree = () => {
  return (
    <>
      <section id="contact-one-page" className="tp-contact-area-2 tp-contact-bg-2 p-relative pb-120">
        <div className="container">
          <div className="tp-contact-box-2">
            <div className="row">
              <div className="col-lg-5">
                <div className="tp-contact-thumb wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                  <Image src={contact_img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="tp-contact-wrapper-2">
                  <span className="tp-section-title-pre">Talk to us</span>
                  <h3 className="tp-section-title">Helping you achieve your financial goals</h3>
                  <ContactFormHomeThree />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAreaHomeThree;