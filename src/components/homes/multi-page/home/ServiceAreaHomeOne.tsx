"use client";
import React from "react";
import service_img_1 from "@/assets/img/service/img-1.jpg";
import service_img_2 from "@/assets/img/service/img-2.jpg";
import service_img_3 from "@/assets/img/service/img-3.jpg";
import ServiceIconOne from "@/svg/home-1/ServiceIconOne";
import ServiceIconTwo from "@/svg/home-1/ServiceIconTwo";
import ServiceIconThree from "@/svg/home-1/ServiceIconThree";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface DataType {
  id: number;
  img: StaticImageData;
  icon: React.JSX.Element;
  title: string;
  sm_des: string;
}
[];
const service_data: DataType[] = [
  {
    id: 1,
    img: service_img_1,
    icon: <ServiceIconOne />,
    title: "Propel Consulting",
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
  },
  {
    id: 2,
    img: service_img_2,
    icon: <ServiceIconTwo />,
    title: "Velocity Solutions",
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
  },
  {
    id: 3,
    img: service_img_3,
    icon: <ServiceIconThree />,
    title: "Revive Business",
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
  },
  // for swiper
  {
    id: 1,
    img: service_img_1,
    icon: <ServiceIconOne />,
    title: "Propel Consulting",
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
  },
  {
    id: 2,
    img: service_img_2,
    icon: <ServiceIconTwo />,
    title: "Velocity Solutions",
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
  },
  {
    id: 3,
    img: service_img_3,
    icon: <ServiceIconThree />,
    title: "Revive Business",
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
  },
];

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    "1700": {
      slidesPerView: 3,
    },
    "1400": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "767": {
      slidesPerView: 2,
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
    nextEl: ".service-button-next-1",
    prevEl: ".service-button-prev-1",
  },
};

const ServiceAreaHomeOne = () => {
  return (
    <section
      id="services-one-page"
      className="tp-service-area pt-120 pb-90"
      style={{ backgroundColor: "#F6F6F9" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="tp-service-title-wrapper mb-40">
              <span className="tp-section-title-pre">Nuestros servicios</span>
              <h3 className="tp-section-title">
                Innove para dominar <br />
                con nosotros
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="tp-service-nav text-end">
              <button type="button" className="service-button-prev-1">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button type="button" className="service-button-next-1">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <Swiper
            {...setting}
            loop={true}
            modules={[Navigation]}
            className="tp-service-active swiper-container wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            {service_data.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide mb-30 mt-40">
                <div className="tp-service-item-wrapper p-relative">
                  <div className="tp-service-item-icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="tp-service-item-content">
                    <h4 className="tp-service-item-title">
                      <Link href="/service-details">{item.title}</Link>
                    </h4>
                    <p>{item.sm_des}</p>
                  </div>
                  <div className="tp-service-item-thumb">
                    <Link href="/service-details">
                      <Image src={item.img} alt="image-title-here" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaHomeOne;
