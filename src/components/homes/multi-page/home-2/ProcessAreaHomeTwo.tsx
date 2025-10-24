
import React from 'react';
import Image from 'next/image';
import process_img_1 from "@/assets/img/process/home-2/icon-1.svg";
import process_img_2 from "@/assets/img/process/home-2/icon-2.svg";
import process_img_3 from "@/assets/img/process/home-2/icon-3.svg";
import process_img_4 from "@/assets/img/process/home-2/icon-4.svg";
import process_arrow from "@/assets/img/process/home-2/arrow-1.svg";

interface DataType {
  id: number;
  delay: string;
  img: any;
  title: string;
  sm_des: string;
}[]

const process_data: DataType[] = [
  {
    id: 1,
    delay: '.3s',
    img: process_img_1,
    title: 'Strategic Planning',
    sm_des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    id: 2,
    delay: '.6s',
    img: process_img_2,
    title: 'Market Research',
    sm_des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    id: 3,
    delay: '.9s',
    img: process_img_3,
    title: 'Financial Advisory',
    sm_des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    id: 4,
    delay: '1.2s',
    img: process_img_4,
    title: 'Change Management',
    sm_des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  }
]


const process_content = {
  subtitle: 'work process',
  title: <>Where your financial dreams <br /> become reality</>,
}
const { subtitle, title } = process_content

const ProcessAreaHomeTwo = () => {
  return (
    <>
      <section className="tp-process-arae-2 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-process-title-wrapper-2 text-center mb-70">
                <span className="tp-section-title-pre">{subtitle}</span>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
          </div>
          <div className="tp-process-wrapper-2 p-relative">
            <div className="tp-process-arrows">
              <span className="shape-1">
                <Image src={process_arrow} alt="image-title-here" />
              </span>
              <span className="shape-2">
                <Image src={process_arrow} alt="image-title-here" />
              </span>
              <span className="shape-3">
                <Image src={process_arrow} alt="image-title-here" />
              </span>
            </div>
            <div className="row">
              {process_data.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                  <div className="tp-process-item-2 text-center p-relative mb-30 wow fadeInUp"
                    data-wow-duration="1s" data-wow-delay={item.delay}>
                    <div className="tp-process-item-icon-2">
                      <span>
                        <Image src={item.img} alt="image-title-here" />
                        <i>0{item.id}</i>
                      </span>
                    </div>
                    <div className="tp-process-item-content-2">
                      <h4 className="tp-process-title">{item.title}</h4>
                      <p>{item.sm_des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessAreaHomeTwo;