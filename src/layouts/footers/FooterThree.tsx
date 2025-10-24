

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import footer_shpa_1 from "@/assets/img/footer/home-3/shape-1.png";
import footer_shpa_2 from "@/assets/img/footer/home-3/shape-2.png";
import footer_icon_1 from "@/assets/img/footer/home-3/icon.svg";
import footer_logo from "@/assets/img/logo/logo.png";
import SocialLinks, { CopyRight } from '@/components/common/SocialLinks';

interface Datatype {
  sm_info: React.JSX.Element;
  info: string;
  phone: string;
  email: string;
  link_title: string;
  usefull_link: string[];
  service_title: string;
  service_link: string[];
  post_title: string;
  post_list: {
    title: string;
    publish: string;
    link: string;
  }[];
}

const footer_content: Datatype = {
  sm_info: <>Get Latest Updated Subscribe to Our <br /> Newsletter</>,
  info: "Don't just take our word for it hear what our customers have to say about us!",
  phone: "+123-456-7890",
  email: "info@example.com",
  link_title: "Useful Links",
  usefull_link: [
    "About us",
    "Service",
    "Testimonial",
    "Blog",
  ],
  service_title: "More Service",
  service_link: [
    "About Us",
    "Service",
    "Testimonial",
    "Blog",
  ],
  post_title: "Popular Post",
  post_list: [
    { title: "Ished fact that a reader", publish: "October 19, 2023", link: "#" },
    { title: "Will distrol acted desig", publish: "October 20, 2023", link: "#" },
    { title: "Transforming Business For You", publish: "October 22, 2023", link: "#" },
  ],
}
const { sm_info, info, phone, email, link_title, usefull_link, service_title, service_link, post_title, post_list } = footer_content;


const FooterThree = () => {
  return (
    <>
      <footer className="tp-footer-area-3 pt-120 p-relative z-index-1" style={{ backgroundColor: '#16243E' }}>
        <div className="tp-footer-bg-shape-3">
          <Image className="shape-1" src={footer_shpa_1} alt="image-title-here" />
          <Image className="shape-2" src={footer_shpa_2} alt="image-title-here" />
        </div>
        <div className="tp-footer-subscribe pb-80">
          <div className="container">
            <div className="tp-footer-subscribe-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-7">
                  <div className="tp-footer-subscribe-wrapper-title d-flex align-items-center">
                    <span><Image src={footer_icon_1} alt="image-title-here" /></span>
                    <h3 className="tp-footer-subscribe-title">{sm_info}</h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <div className="tp-footer-subscribe-email">
                    <input type="email" placeholder="Your email address" />
                    <span><i className="fa-solid fa-paper-plane"></i></span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="tp-footer-subscribe-btn text-lg-end">
                    <button>Subscribe Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-main-area-3">
          <div className="container">
            <div className="tp-footer-border">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tp-footer-widget tp-footer-3-col-1 mb-50">
                    <div className="tp-footer-logo mb-20">
                      <Link href="/"> <Image src={footer_logo} alt="image-title-here" /></Link>
                    </div>
                    <div className="tp-footer-widget-content">
                      <p>{info}</p>
                      <div className="tp-footer-info">
                        <div className="tp-footer-info-call">
                          <a href={`telto:${phone}`}><i className="fa-solid fa-phone"></i>{phone}</a>
                        </div>
                        <div className="tp-footer-info-mail">
                          <a href={`mail:${email}`}><i className="fa-solid fa-envelope"></i>{email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tp-footer-widget tp-footer-3-col-2 mb-50">
                    <h3 className="tp-footer-widget-title">{link_title}</h3>
                    <div className="tp-footer-widget-content">
                      <ul>
                        {usefull_link.map((item, index) => (
                          <li key={index}><a href="#"><i className="fa-regular fa-angle-right"></i>{item}</a></li>
                        ))}

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tp-footer-widget tp-footer-3-col-3 mb-50">
                    <h3 className="tp-footer-widget-title">{service_title}</h3>
                    <div className="tp-footer-widget-content">
                      <ul>
                        {service_link.map((item, index) => (
                          <li key={index}><a href="#"><i className="fa-regular fa-angle-right"></i>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="tp-footer-widget tp-footer-3-col-4 mb-50">
                    <h3 className="tp-footer-widget-title">{post_title}</h3>
                    <div className="tp-footer-widget-content">
                      {post_list.map((item, index) => (
                        <div key={index} className="tp-footer-widget-item">
                          <h4 className="tp-footer-widget-item-title"><Link href="/blog-details">{item.title}</Link></h4>
                          <span><i className="fa-regular fa-calendar-days"></i>{item.publish}</span>
                        </div>
                      ))}

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
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="tp-footer-copyright-inner">
                  <p> <CopyRight /> </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="tp-footer-copyright-inner text-md-end">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;