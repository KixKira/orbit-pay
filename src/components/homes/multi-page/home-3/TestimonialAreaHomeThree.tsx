'use client'
import React from 'react';

import Image, { StaticImageData } from 'next/image';
import testi_shape_1 from "@/assets/img/support/shape-3.png";
import testi_shape_2 from "@/assets/img/support/shape-4.png";

import testi_quote_2 from "@/assets/img/testimonial/home-3/quote.png"
import testi_brand_1 from "@/assets/img/testimonial/home-3/brand-1.png";
import testi_brand_2 from "@/assets/img/testimonial/home-3/brand-2.png";

import testi_user_1 from "@/assets/img/testimonial/home-3/user-1.jpg";
import testi_user_2 from "@/assets/img/testimonial/home-3/user-2.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';


interface DataType {
  id: number;
  brand: StaticImageData;
  user: StaticImageData;
  name: string;
  designation: string;
  sm_des: string;
}


const testi_data: DataType[] = [
  {
    id: 1,
    brand: testi_brand_1,
    user: testi_user_1,
    name: 'Guy Hawkins',
    designation: 'Web Designer',
    sm_des: 'This agency is the highly recommended by me ever-evolving  requires a thorough  the understanding  the market, strong business is the business This agency is the highly recommended by me ever'
  },
  {
    id: 2,
    brand: testi_brand_2,
    user: testi_user_2,
    name: 'Eleanor Pena',
    designation: 'President of Sales',
    sm_des: 'This agency is the highly recommended by me ever-evolving  requires a thorough  the understanding  the market, strong business is the business This agency is the highly recommended by me ever'
  },
  // for swiper 
  {
    id: 1,
    brand: testi_brand_1,
    user: testi_user_1,
    name: 'Guy Hawkins',
    designation: 'Web Designer',
    sm_des: 'This agency is the highly recommended by me ever-evolving  requires a thorough  the understanding  the market, strong business is the business This agency is the highly recommended by me ever'
  },
  {
    id: 2,
    brand: testi_brand_2,
    user: testi_user_2,
    name: 'Eleanor Pena',
    designation: 'President of Sales',
    sm_des: 'This agency is the highly recommended by me ever-evolving  requires a thorough  the understanding  the market, strong business is the business This agency is the highly recommended by me ever'
  }
]

const setting = {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    '1700':{
      slidesPerView:2,
    },
    '1400':{
      slidesPerView:2,
    },
    '1200':{
      slidesPerView:2,
    },
    '767': {
      slidesPerView:2,
    },
    '576': {
      slidesPerView:1,
    },
    '0': {
      slidesPerView:1,
    },
    },
}

const TestimonialAreaHomeThree = () => {
  return (
    <>
      <section className="tp-testimonial-area-3 p-relative pt-120 pb-90" style={{ backgroundColor: '#16243E' }}>
        <div className="tp-testimonial-shape-3">
          <Image className="shape-1" src={testi_shape_1} alt="image-title-here" />
          <Image className="shape-2" src={testi_shape_2} alt="image-title-here" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-testimonial-title-wrapper-3 text-center mb-60">
                <span className="tp-section-title-pre">Clients talk</span>
                <h3 className="tp-section-title">Experience financial growth <br /> with us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tp-testimonial-slider-3">
              <Swiper {...setting} className="tp-testimonial-3-active swiper-container">

                {testi_data.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide mb-30">
                    <div className="tp-testimonial-item-3">
                      <div className="tp-testimonial-brand d-flex justify-content-between mb-30">
                        <Image src={testi_quote_2} alt="image-title-here" />
                        <Image src={item.brand} alt="image-title-here" />
                      </div>
                      <p>{item.sm_des}</p>
                      <div className="tp-testimonial-user-3 d-flex">
                        <div className="tp-testimonial-user-3-thumb">
                          <Image src={item.user} alt="image-title-here" />
                        </div>
                        <div className="tp-testimonial-user-3-content">
                          <h4 className="tp-testimonial-user-3-title">{item.name}</h4>
                          <span>{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))} 
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeThree;