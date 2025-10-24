"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "react-simple-star-rating";

import testimonial_img_1 from "@/assets/img/testimonial/img-1.jpg";
import testimonial_img_2 from "@/assets/img/testimonial/img-2.jpg";
import testimonial_quot from "@/assets/img/testimonial/quot.png";
import testimonial_shape from "@/assets/img/testimonial/bg-shape.png";

interface DataType {
  id: number;
  ratting: number;
  img: StaticImageData;
  sm_des: string;
  name: string;
  designation: string;
}

const testimonial_data: DataType[] = [
  {
    id: 1,
    ratting: 5,
    img: testimonial_img_1,
    sm_des:
      "No te conformes con nuestra palabra, escucha lo que nuestros clientes dicen de nosotros. Hemos ayudado a miles de personas...",
    name: "Hardli sefa",
    designation: "Customer",
  },
  {
    id: 2,
    ratting: 4,
    img: testimonial_img_2,
    sm_des:
      "No te conformes con nuestra palabra, escucha lo que nuestros clientes dicen de nosotros. Hemos ayudado a miles de personas...",
    name: "Sefa Hardli",
    designation: "Customer",
  },
  // for swiper
  {
    id: 3,
    ratting: 4,
    img: testimonial_img_1,
    sm_des:
      "No te conformes con nuestra palabra, escucha lo que nuestros clientes dicen de nosotros. Hemos ayudado a miles de personas...",
    name: "Hardli sefa",
    designation: "Customer",
  },
  {
    id: 4,
    ratting: 3,
    img: testimonial_img_2,
    sm_des:
      "No te conformes con nuestra palabra, escucha lo que nuestros clientes dicen de nosotros. Hemos ayudado a miles de personas...",
    name: "Sefa Hardli",
    designation: "Customer",
  },
];

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    "1700": {
      slidesPerView: 2,
    },
    "1400": {
      slidesPerView: 2,
    },
    "1200": {
      slidesPerView: 2,
    },
    "992": {
      slidesPerView: 2,
    },
    "767": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".testimonial-button-next-1",
    prevEl: ".testimonial-button-prev-1",
  },
};

const TestimonialAreaHomeOne = () => {
  return (
    <section
      className="tp-testimonial-area tp-testimonial-bg-color p-relative pt-80 pb-50"
      style={{ backgroundColor: "#F6F6F9" }}
    >
      <div className="tp-testimonial-bg">
        <Image src={testimonial_shape} alt="image-title-here" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-testimonial-title">
              <span className="tp-section-title-pre">
                Testimonio de clientes
              </span>
              <h3 className="tp-section-title">
                Libere el poder de <br />
                su empresa
              </h3>
            </div>
          </div>
          <Swiper
            {...setting}
            loop={true}
            modules={[Navigation]}
            className="tp-testimonial-active swiper-container px-0"
          >
            {testimonial_data.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide mb-30 mt-20">
                <div className="tp-testimonial-item-wrapper d-flex align-items-center">
                  <div className="tp-testimonial-item-thumb">
                    <Image src={item.img} alt="image-title-here" />
                  </div>
                  <div className="tp-testimonial-item-content p-relative">
                    <div className="tp-testimonial-item-rating">
                      <Rating
                        initialValue={item.ratting}
                        size={16}
                        readonly={true}
                      />
                    </div>
                    <p>{item.sm_des}</p>
                    <h4 className="tp-testimonial-item-title">{item.name}</h4>
                    <span>{item.designation}</span>
                    <div className="tp-testimonial-item-quot">
                      <Image src={testimonial_quot} alt="image-title-here" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="tp-testimonial-nav text-end">
            <button type="button" className="testimonial-button-prev-1">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button type="button" className="testimonial-button-next-1">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaHomeOne;
