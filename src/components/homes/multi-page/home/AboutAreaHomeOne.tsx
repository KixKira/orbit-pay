import React from "react";
import Link from "next/link";
import Image from "next/image";
import about_img from "@/assets/img/about/img-1.jpg";
import about_shape from "@/assets/img/about/shape-3.png";

import about_shape_1 from "@/assets/img/about/img-2.jpg";
import about_shape_2 from "@/assets/img/about/shape-1.png";
import about_shape_3 from "@/assets/img/about/shape-2.png";
import about_shape_4 from "@/assets/img/about/shape-4.png";

interface DataType {
  subtitle: string;
  title: string;
  sm_des: string;
  features: string[];
}

const about_content: DataType = {
  subtitle: "Quiénes somos",
  title: "Soluciones que marcan la diferencia",
  sm_des:
    "9 años de trayectoria, miles de clientes asistidos, y un equipo de expertos dedicado a brindarle el mejor apoyo financiero y el servicio que usted merece.",
  features: [
    "Errores a evitar para dum Auam.",
    "Evitar los errores tontos",
    "Su Startup stan",
    "Nuestra industria de arranque Aquí",
  ],
};
const { subtitle, title, sm_des, features } = about_content;

const AboutAreaHomeOne = () => {
  return (
    <section
      id="about-one-page"
      className="tp-about-area p-relative pt-130 pb-210"
    >
      <div className="tp-about-shape">
        <Image src={about_shape} alt="image-title-here" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="tp-about-thumb-wrapper p-relative wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="main">
                <Image src={about_img} alt="image-title-here" />
              </div>
              <Image
                className="shape-1"
                src={about_shape_1}
                alt="image-title-here"
              />
              <Image
                className="shape-2"
                src={about_shape_2}
                alt="image-title-here"
              />
              <Image
                className="shape-3"
                src={about_shape_3}
                alt="image-title-here"
              />
              <Image
                className="shape-4"
                src={about_shape_4}
                alt="image-title-here"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-about-wrapper">
              <div className="tp-about-title-wrapper">
                <span className="tp-section-title-pre">{subtitle}</span>
                <h3 className="tp-section-title">{title}</h3>
              </div>
              <p>{sm_des}</p>
              <div className="tp-about-wrapper-list">
                <ul>
                  {features.map((item, index) => (
                    <li key={index}>
                      <span>
                        <i className="fa-regular fa-circle"></i>
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="tp-about-btn">
                <Link className="tp-btn" href="/about">
                  About Us{" "}
                  <span>
                    <i className="fa-regular fa-plus"></i>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaHomeOne;
