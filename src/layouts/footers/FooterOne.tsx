import React from "react";
import Image from "next/image";
import Link from "next/link";

import footer_shape_1 from "@/assets/img/footer/bg-shape.png";
import footer_logo from "@/assets/img/logo/Logo.png";
import SocialLinks, { CopyRight } from "@/components/common/SocialLinks";

interface DataType {
  sm_info: string;
  link_title: string;
  link_list: {
    title: string;
    link: string;
  }[];
  // post_title: string;
  // post_list: {
  //   title: string;
  //   publish: string;
  //   link: string;
  // }[];
  footer_links: string[];
}

const footer_content: DataType = {
  sm_info:
    "Nuestra empresa nace de la necesidad de innovación en tiempos de grandes cambios financieros. Por ello, basamos nuestra visión en la búsqueda constante de soluciones de valor duraderas y la gestión eficiente de recursos para nuestros clientes.",
  link_title: "Enlaces rápidos",
  link_list: [
    { title: "Acerca de", link: "#" },
    { title: "Servicios", link: "#" },
    { title: "Preguntas Frecuentes", link: "#" },
    { title: "Convierte en Agente", link: "#" },
    { title: "Contáctanos", link: "#" },
  ],
  // post_title: "Popular Post",
  // post_list: [
  //   {
  //     title: "Ished fact that a reader",
  //     publish: "October 19, 2023",
  //     link: "#",
  //   },
  //   {
  //     title: "Will distrol acted desig",
  //     publish: "October 20, 2023",
  //     link: "#",
  //   },
  //   {
  //     title: "Transforming Business For You",
  //     publish: "October 22, 2023",
  //     link: "#",
  //   },
  // ],
  footer_links: ["Quiénes somos", "Servicios", "Contacte con nosotros"],
};
const { sm_info, link_title, link_list, footer_links } = footer_content;

const FooterOne = () => {
  return (
    <footer
      className="tp-footer-area pt-80  z-index-1"
      style={{ backgroundColor: "#16243E" }}
    >
      <div className="tp-footer-bg-shape">
        <Image src={footer_shape_1} alt="image-title-here" />
      </div>
      <div className="tp-footer-main-area tp-footer-border">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-footer-widget tp-footer-col-1 mb-50">
                <div className="tp-footer-logo mb-20">
                  <Link href="/">
                    {" "}
                    <Image src={footer_logo} alt="image-title-here" />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>{sm_info}</p>
                  <div className="tp-footer-widget-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="tp-footer-widget tp-footer-col-2 mb-50">
                <h3 className="tp-footer-widget-title">{link_title}</h3>
                <div className="tp-footer-widget-content">
                  <ul>
                    {link_list.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget tp-footer-col-3 mb-50">
                <h3 className="tp-footer-widget-title">{post_title}</h3>
                <div className="tp-footer-widget-content">
                  {post_list.map((item, index) => (
                    <div key={index} className="tp-footer-widget-item">
                      <h4 className="tp-footer-widget-item-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h4>
                      <span>
                        <i className="fa-regular fa-calendar-days"></i>
                        {item.publish}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="tp-footer-widget tp-footer-col-4 mb-50">
                <h3 className="tp-footer-widget-title">Contáctanos</h3>
                <div className="tp-footer-widget-content">
                  <div className="tp-footer-widget-contact">
                    <div className="tp-footer-widget-contact-inner">
                      <a href="https://www.google.com/maps" target="_blank">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                        6391 Elgin St. Celina, 10299
                      </a>
                    </div>
                    <div className="tp-footer-widget-contact-inner">
                      <a href="tel:123456765">
                        <i className="fa-solid fa-phone"></i> (629) 555-0129
                      </a>
                    </div>
                    <div className="tp-footer-widget-contact-inner">
                      <a href="mailto:info@example.com">
                        <i className="fa-solid fa-envelope"></i>{" "}
                        info@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-copyright-area p-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner">
                <p>
                  {" "}
                  <CopyRight />{" "}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="tp-footer-copyright-inner text-lg-end">
                {footer_links.map((item, index) => (
                  <a key={index} href="#">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
