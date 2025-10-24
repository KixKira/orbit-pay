

import service_data from '@/data/ServiceData';
import ServiceIconOne from '@/svg/home-1/ServiceIconOne';
import ServiceIconThree from '@/svg/home-1/ServiceIconThree';
import ServiceIconTwo from '@/svg/home-1/ServiceIconTwo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = service_data.filter(item => item.home === 'service');

const ServiceArea = () => {
  return (
    <>
      <section className="tp-service-breadcrumb-area pt-120 pb-40">
        <div className="container">
          <div className="row">
            {services.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tp-service-item-wrapper p-relative mb-80 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-service-item-icon">
                    <span>
                      {item.id === 1 && <ServiceIconOne />}
                      {item.id === 2 && <ServiceIconTwo />}
                      {item.id === 3 && <ServiceIconThree />}
                    </span>
                  </div>
                  <div className="tp-service-item-content">
                    <h4 className="tp-service-item-title"><Link href="/service-details">{item.title}</Link></h4>
                    <p>{item.sm_des}</p>
                  </div>
                  <div className="tp-service-item-thumb">
                    <Link href="/service-details">
                      <Image src={item.img} alt="image-title-here" />
                    </Link>
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

export default ServiceArea;