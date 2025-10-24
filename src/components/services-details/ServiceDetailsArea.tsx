
import React from 'react';
import Image from 'next/image';
// service details images import here
import service_details_img_1 from "@/assets/img/service/service-details/img-1.jpg";
import service_details_img_2 from "@/assets/img/service/service-details/img-2.jpg";
import features_icon_1 from "@/assets/img/service/service-details/icon-1.svg";
import features_icon_2 from "@/assets/img/service/service-details/icon-2.svg";
import features_doc from "@/assets/img/service/service-details/icon-3.svg";

// service details data types
interface DataType {
    title: string;
    sm_des_1: string;
    sm_des_2: string;
    features: {
        img: any;
        title: string;
        sm_des: string;
    }[];
    title_2: string;
    sm_des_3: string;
    sm_des_4: string;
    quote: string;
    service_title: string;
    service_list: { 
        title: string;
        link: string;
    }[];
    some_list: string[];
}
// service details content 
const service_details: DataType = {
  title: 'Industry stan Developing',
  sm_des_1: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non",
  sm_des_2: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis no vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo",
  features: [
    {
      img: features_icon_1,
      title: 'Analysis Data',
      sm_des: 'Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and  is text Lorem Ipsum is simply design company  text Lorem Ipsum',
    },
    {
      img: features_icon_2,
      title: 'Delivary Customer',
      sm_des: 'Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and  is text Lorem Ipsum is simply design company  text Lorem Ipsum',
    }
  ],
  title_2: "Expert test matters",
  sm_des_3: "Aliquam eros justo, posu ere loborti viver lao reet matti ullam corpe.Aliquam eros justo, posuere lobortis non",
  sm_des_4: "Aliquam eros justo, posuere loboh viverra laoreet matti ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper.",
  quote: "Aliquam eros justo, posuere loborti viverra laoreet matti uacorper posuere viverra .Aliquam eros no justo des posuere lobortis non, viverra laoreet ue mattis fermentum ullamcorper viverra laoreet. Aliquam eros industry posuere loborti viverra laoreet matti ullamcorpe",
  service_title: "Our service",
  service_list: [
    { title: "Finance & Banking", link: "#" },
    { title: "Business Advice", link: "#" },
    { title: "Stock market", link: "#" },
    { title: "Regular start", link: "#" },
    { title: "Precious metal", link: "#" },
  ],
  some_list: [
    "Mistakes To Avoid to dum",
    "Startup industry stan Aliquam",
    "Knew About Fots text posuere",
  ]
}
const { title, sm_des_1, sm_des_2, features, title_2, sm_des_3, sm_des_4, quote, service_list, service_title, some_list } = service_details



const ServiceDetailsArea = () => {
  return (
    <>
      <section className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tp-service-details-wrapper">
                <div className="tp-service-details-thumb">
                  <Image src={service_details_img_1} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                </div>
                <h3 className="tp-service-details-title">{title}</h3>
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>

                <div className="tp-service-details-box d-flex mb-60">
                  {features.map((item, index) =>
                    <div key={index} className={`tp-service-details-item d-flex ${index === 0 ? 'mr-30' : ''}`}>
                      <div className="tp-service-details-icon">
                        <Image src={item.img} alt="image-title-here" />
                      </div>
                      <div className="tp-service-details-content">
                        <h3 className="tp-service-details-subtitle">{item.title}</h3>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="tp-service-details-box-2 d-flex mb-40">
                  <div className="tp-service-details-box-content mr-30">
                    <h3 className="tp-service-details-subtitle-2">{title_2}</h3>
                    <p>{sm_des_3}</p>
                    <p>{sm_des_4}</p>
                  </div>
                  <div className="tp-service-details-box-thumb">
                    <Image src={service_details_img_2} alt="image-title-here" />
                  </div>
                </div>

                <div className="tp-service-details-quote">
                  <span>{quote}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <h3 className="tp-service-widget-title">{service_title}</h3>
                    <ul>
                      {service_list.map((item, index) =>
                        <li key={index} className={index === 0 ? 'active' : ''}><a href={item.link}>{item.title}</a></li>
                      )} 
                    </ul>
                  </div>
                </div>
                <div className="tp-service-widget-contact mb-40" style={{ backgroundImage: `url(/assets/img/service/service-details/img-3.jpg)` }}>
                  <div className="tp-service-widget-contact-content text-center">
                    <div className="tp-service-widget-contact-icon">
                      <span><i className="fa-solid fa-phone"></i></span>
                    </div>
                    <p>Requesting A Call:</p>
                    <a href="tel:55555555">000 555-0129</a>
                  </div>
                </div>

                <div className="tp-service-widget-download mb-40">
                  <a href="#"><span>Download Profile
                    <Image src={features_doc} alt="image-title-here" /></span>
                  </a>
                </div>

                <div className="tp-service-widget-list">
                  <div className="tp-service-widget-list-content">
                    <ul>
                      {some_list.map((item, i) =>
                        <li key={i}><i className="fa-light fa-circle-check"></i> {item}</li>
                      )} 
                    </ul>
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

export default ServiceDetailsArea;