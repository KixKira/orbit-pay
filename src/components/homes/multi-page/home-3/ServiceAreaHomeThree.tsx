
import React from 'react';
import Image from 'next/image';
import service_icon_1 from "@/assets/img/service/home-3/icon-1.svg";
import service_icon_2 from "@/assets/img/service/home-3/icon-2.svg";
import service_icon_3 from "@/assets/img/service/home-3/icon-3.svg";
import Link from 'next/link';


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  service_data: {
      id: number;
      delay: string;
      img: any;
      title: string;
      sm_des: string;
  }[];
}

const service_content: DataType = {
  subtitle: 'Our services',
  title: <>Your financial partner <br /> for life</>,
  service_data: [
    {
      id: 1,
      delay: ".3s",
      img: service_icon_1,
      title: 'Credit Works',
      sm_des: 'Our mission is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
    },
    {
      id: 2,
      delay: ".5s",
      img: service_icon_2,
      title: 'Invest Right',
      sm_des: 'Our mission is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
    },
    {
      id: 3,
      delay: ".7s",
      img: service_icon_3,
      title: 'Roofing Layers',
      sm_des: 'Our mission is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
    }
  ]
}
const { subtitle, title, service_data } = service_content

const ServiceAreaHomeThree = () => {
  return (
    <>
      <section id="services-one-page" className="tp-service-area-3 pt-120 pb-90"  style={{ backgroundColor: '#F6F6F9' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-service-title-wrapper-3 mb-40 text-center">
                <span className="tp-section-title-pre">{subtitle}</span>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tp-service-item-wrapper-3 p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-service-item-content-3">
                    <div className="tp-service-item-icon-3">
                      <Image src={item.img} alt="image-title-here" />
                    </div>
                    <h4 className="tp-service-item-title-3"><Link href="/service-details">{item.title}</Link></h4>
                    <p>{item.sm_des}</p>
                  </div>
                  <div className="tp-service-item-btn-3">
                    <Link href="/service-details">Read more</Link>
                  </div>
                  <div className="tp-service-item-number">
                    <span>0{item.id}</span>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeThree;