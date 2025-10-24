'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import testimonial_img_1 from "@/assets/img/testimonial/home-2/img-1.jpg";
import testimonial_img_2 from "@/assets/img/testimonial/home-2/img-2.jpg";
import testimonial_quote from "@/assets/img/testimonial/home-2/quote.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  category: string;
  sm_info: string;
}[]

const testimonial_data: DataType[] = [
  {
    id: 1,
    img: testimonial_img_1,
    title: 'Donald Hughes',
    category: 'Architecher',
    sm_info: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.",
  },
  {
    id: 2,
    img: testimonial_img_2,
    title: 'Micle Miahuk',
    category: 'Customer',
    sm_info: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.",
  },
  // for swiper 
  {
    id: 1,
    img: testimonial_img_1,
    title: 'Donald Hughes',
    category: 'Architecher',
    sm_info: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.",
  },
  {
    id: 2,
    img: testimonial_img_2,
    title: 'Micle Miahuk',
    category: 'Customer',
    sm_info: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.",
  },
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
    '992': {
      slidesPerView:2,
    },
    '767': {
      slidesPerView:1,
    },
    '576': {
      slidesPerView:1,
    },
    '0': {
      slidesPerView:1,
    },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".testimonial-button-next-1",
      prevEl: ".testimonial-button-prev-1",
    },
}

const TestimonialAreaHomeTwo = () => {
  return (
    <>
      <section className="tp-testimonial-area-2 p-relative pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="tp-testimonial-title-2">
                <span className="tp-section-title-pre">Testimonial</span>
                <h3 className="tp-section-title">Your trusted <br /> financial advisor</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-4">
              <div className="tp-testimonial-nav-2 text-lg-end mb-55 d-none d-sm-block">
                <button type="button" className="testimonial-button-prev-1"><i className="fa-regular fa-arrow-left"></i>
                </button>
                <button type="button" className="testimonial-button-next-1"><i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tp-testimonial-slider-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
              <Swiper {...setting} modules={[Navigation]} className="tp-testimonial-2-active swiper-container">
                {testimonial_data.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide mt-30 mb-70">
                    <div className="tp-testimonial-item-2">
                      <div className="tp-testimonial-thumb-2">
                        <Image src={item.img} alt="image-title-here" />
                      </div>
                      <div className="tp-testimonial-content-2">
                        <div className="tp-testimonial-user d-flex align-items-center">
                          <div className="tp-testimonial-user-content">
                            <h3 className="tp-testimonial-title-2">{item.title}</h3>
                            <span className="tp-testimonial-user-content-description">{item.category}</span>
                            <p>{item.sm_info}</p>
                            <div className="tp-testimonial-quote">
                              <Image src={testimonial_quote} alt="image-title-here" />
                            </div>
                          </div>
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

export default TestimonialAreaHomeTwo;