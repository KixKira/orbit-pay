'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import support_img_1 from '@/assets/img/support/img-1.jpg';
import support_shape_1 from '@/assets/img/support/shape-1.png';
import support_shape_2 from '@/assets/img/support/shape-2.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


interface DataType {
  success_title: string;
  success_year: string;
  subtitle: string;
  title: string;
  sm_des: string;
  features: string[];
}

const support_content: DataType = {
  success_title: "Success Rate",
  success_year: "25+ Years Of Experience",
  subtitle: "Who We Are",
  title: "Financial solutions for every stage of life",
  sm_des: "Payment solutions enable businesses to accept payments Payment enable businesses to accept payments from customers conveniently and securely Payment solutions enable inesses to",
  features: [
    "24/7 Call Service Available It is a long established fact that a",
    "Bring the It is a long established fact that a reader will be <br /> distracted by the readable content",
  ]
}

const { success_title, success_year, subtitle, title, sm_des, features } = support_content


const SupportAreaHomeThree = () => {
  return (
    <>
      <section className="tp-support-area tp-support-bg p-relative">
        <div className="container">
          <div className="tp-support-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="tp-support-thumb d-flex justify-content-center justify-content-lg-end p-relative wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                  <Image className="main" style={{ width: '100%', height: 'auto' }} src={support_img_1} alt="image-title-here" />
                  <Image className="shape-1" src={support_shape_1} alt="image-title-here" />
                  <Image className="shape-2" src={support_shape_2} alt="image-title-here" />
                  <div className="tp-support-count text-center">
                    <div className="counter-border">
                      <div className="circular tl-progress mx-auto" style={{ width: '140px', fontWeight: '700', }}> 

                        <CircularProgressbar
                          className='d-block'
                          value={85} text={`${85}%`}
                          strokeWidth={10}
                          styles={buildStyles({
                            textColor: '#000',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#00A3C3',
                          })} 
                        />
                      </div>
                      <p>{success_title}</p>
                      <span>{success_year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tp-support-wrapper-inner">
                  <div className="tp-support-title-wrapper">
                    <span className="tp-section-title-pre">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                  <p>{sm_des} </p>
                  <ul>
                    {features.map((item, index) => (
                      <li key={index}><i className="fa-regular fa-check"></i>  
                      <span  dangerouslySetInnerHTML={{ __html: item }}></span>
                      </li>
                    ))} 


                  </ul>
                  <div className="tp-support-btn">
                    <Link className="tp-btn" href="/team-details">Learn More <span><i className="fa-regular fa-plus"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportAreaHomeThree;