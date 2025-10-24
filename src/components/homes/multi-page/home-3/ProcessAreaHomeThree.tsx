
import React from 'react';
import Image from 'next/image';
import process_icon_1 from "@/assets/img/process/home-3/icon-1.svg";
import process_icon_2 from "@/assets/img/process/home-3/icon-2.svg";


const process_content = {
  subtitle: 'working process',
  title: <>Invest in your future <br /> with us</>,
  process_data: [
    {
      id: 1,
      img: process_icon_1,
      title: 'Booking Online',
      sm_des: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature',
      delay: '.3s'
    },
    {
      id: 2,
      img: process_icon_2,
      title: 'Best emplementation',
      sm_des: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature',
      delay: '.5s'
    },
    {
      id: 3,
      img: process_icon_1,
      title: 'Booking Online',
      sm_des: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature',
      delay: '.7s'
    }
    
  ]
}
  

const ProcessAreaHomeThree = () => {
  return (
    <>
      <section className="tp-process-area-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-process-title-wrapper-3 text-center mb-50">
                <span className="tp-section-title-pre">
                  {process_content.subtitle}
                </span>
                <h3 className="tp-section-title">{process_content.title}</h3>
              </div>
            </div>
          </div>

          <div className="row">
            {process_content.process_data.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tp-process-item-3 text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-process-item-3-icon">
                    <span><Image src={item.img} alt="image-title-here" /></span>
                  </div>
                  <h4 className="tp-process-title-3">{item.title}</h4>
                  <p>{item.sm_des}</p>
                  <b>0{item.id}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessAreaHomeThree;