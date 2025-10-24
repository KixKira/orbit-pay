

import React from 'react';
import Image from 'next/image';
import hero_img_1 from "@/assets/img/hero/home-3/shape-1.png";
import hero_img_2 from "@/assets/img/hero/home-3/shape-2.png";
import hero_img from "@/assets/img/hero/home-3/img.jpg";
import Link from 'next/link';

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  btn_text: string;
}

const hero_content: DataType = {
  subtitle: 'Be Invest',
  title: <>Our mission is <br /> your financial <br /> success</>,
  sm_des: <>And In Order To Make A Business, Brand Advertising And <br /> Marketing Plays is An Important Role.</>,
  btn_text: "Discover More",
}
const { subtitle, title, sm_des, btn_text } = hero_content


const HeroAreaHomeThree = () => {
  return (
    <>
      <section className="tp-hero-area-3 tp-hero-hight-3 p-relative pt-220" style={{ backgroundColor: '#212240' }}>
        <div className="tp-hero-thumb-shape-3">
          <Image className="shape-1" src={hero_img_1} alt="image-title-here" />
        </div>
        <div className="tp-hero-thumb-shape-3-two">
          <Image className="shape-2" src={hero_img_2} alt="image-title-here" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="tp-hero-content-3 p-relative">
                <div className="tp-hero-title-wrapper-3 p-relative z-index-1">
                  <span className="tp-hero-subtitle-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">{subtitle}</span>
                  <h2 className="tp-hero-title-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">{title}</h2>
                  <p className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">{sm_des}</p>
                </div>
                <div className="tp-hero-button-wrapper-3 d-flex wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                  <div className="tp-hero-btn-3">
                    <Link className="tp-btn" href="/about">
                      {btn_text} <span><i className="fa-regular fa-plus"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero-thumb-main-3">
          <div className="tp-hero-thumb-3">
            <Image src={hero_img} alt="image-title-here" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAreaHomeThree;