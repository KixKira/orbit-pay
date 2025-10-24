'use client';
import React from 'react';

const cta_content = {
  subtitle: "FinBest",
  info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  btn: "Subscribe Now",
  email: "example@gmail.com",
}
const { subtitle, info, btn, email } = cta_content;

const CtaAreaHomeTwo = () => {
  return (
    <>
      <section className="tp-cta-area-2 p-relative pt-75 pb-80" style={{ backgroundImage: `url(/assets/img/cta/home-2/bg.png)` }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="tp-cta-wrapper-2 text-center">
                <h3 className="tp-cta-title-2">{subtitle}</h3>
                <p>{info}</p>
                <span>Email: <a href={`mailto:${email}`}>{email}</a></span>
                <div className="tp-cta-email p-relative">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit"><span>{btn}</span></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomeTwo;