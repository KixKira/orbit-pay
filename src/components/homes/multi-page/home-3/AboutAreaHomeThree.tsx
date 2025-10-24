
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Count from '@/components/common/Count';

import about_shape_1 from "@/assets/img/about/home-3/shape-1.png";
import about_shape_2 from "@/assets/img/about/home-3/shape-2.jpg";
import about_icon_1 from "@/assets/img/about/home-3/icon-1.svg";

import about_img_1 from "@/assets/img/about/home-3/img-1.jpg";
import about_fearute_1 from "@/assets/img/about/home-3/icon-2.svg";
import about_fearute_2 from "@/assets/img/about/home-3/icon-3.svg";
import Link from 'next/link';
import VideoPopup from '@/modals/VideoPopup';



const about_content = {
  subtitle: 'About Company',
  title: 'Helping you achieve your financial goals',
  sm_des: "Lorem Ipsum is simply dummy text of the printing and typese industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
  features: [
    {
      img: about_fearute_1,
      title: <>Professional <br /> Marketing</>,
    },
    {
      img: about_fearute_2,
      title: <>Marketing <br /> Analysis</>,
    }
  ],
  sm_des_2: "Lorem Ipsum is simply dummy text of the printing and typese industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
}
const { subtitle, title, sm_des, features, sm_des_2 } = about_content


const AboutAreaHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section id="about-one-page" className="tp-about-area-3 p-relative pt-130 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-about-thumb-wrapper-3 p-relative text-center text-lg-end wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                <Image className="shape" src={about_shape_1} alt="image-title-here" />
                <Image className="shape-2" src={about_shape_2} alt="image-title-here" />
                <div className="main">
                  <Image className="text-end" src={about_img_1} alt="image-title-here" />
                </div>
                <div className="tp-about-thumb-counter text-center">
                  <Image src={about_icon_1} alt="image-title-here" />
                  <h4 className="tp-about-thumb-title d-flex justify-content-center">
                    <Count number={5000} add_style={true} />+
                  </h4>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-wrapper-3">
                <div className="tp-about-title-wrapper">
                  <span className="tp-section-title-pre">{subtitle}</span>
                  <h3 className="tp-section-title">{title}</h3>
                </div>
                <p>{sm_des}</p>

                <div className="tp-about-item-wrapper-3 d-flex flex-wrap">
                  {features.map((item, index) => (
                    <div key={index} className={`tp-about-item-3 d-flex align-items-center mb-20 ${index === 0 ? 'mr-30' : ''}`}>
                      <div className="tp-about-item-icon-3">
                        <span>
                          <Image src={item.img} alt="image-title-here" />
                        </span>
                      </div>
                      <h3 className="tp-about-item-title-3">{item.title}</h3>
                    </div>
                  ))}
                </div>
                <p>{sm_des_2}</p>
                <div className="tp-about-btn-wrapper-2 d-flex align-items-center">
                  <div className="tp-about-btn-3 mr-80">
                    <Link className="tp-btn" href="/about">About Us <span><i className="fa-regular fa-plus"></i></span></Link>
                  </div>
                  <div className="tp-about-video">
                    <a className="popup-video" 
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                    > <span><i className="fa-sharp fa-solid fa-play"></i></span> Watch more videos</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"TCHq0O5rMcM"}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutAreaHomeThree;