import React from "react";
import Count from "@/components/common/Count";
import accordion_data from "@/data/AccordionData";
import faq_icon_1 from "@/assets/img/faq/icon-1.svg";
import faq_icon_2 from "@/assets/img/faq/icon-2.svg";
import Image from "next/image";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: string;
}

const faq_content: DataType = {
  subtitle: "preguntar cualquier cosa",
  title: (
    <>
      Puede ponerse en contacto <br />
      con nosotros para cualquier pregunta
    </>
  ),
  sm_des:
    "Fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader ished fact that ",
};
const { subtitle, title, sm_des } = faq_content;

const FaqAreaHomeOne = () => {
  return (
    <section
      className="tp-faq-area p-relative pt-120 pb-120"
      style={{ backgroundImage: "url(/assets/img/faq/bg-shape.png)" }}
    >
      <div className="tp-faq-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="tp-faq-wrapper">
              <div className="tp-faq-title-wrapper">
                <span className="tp-section-title-pre">{subtitle}</span>
                <h3 className="tp-section-title"> {title} </h3>
                <p> {sm_des}</p>
              </div>
              <div className="tp-faq-counter-wrapper d-flex">
                <div className="tp-faq-counter d-flex align-items-center mr-20 mb-30">
                  <div className="tp-faq-counter-icon">
                    <span>
                      <Image src={faq_icon_1} alt="image-title-here" />
                    </span>
                  </div>
                  <div className="tp-faq-counter-content">
                    <h4 className="tp-faq-counter-title d-flex">
                      <Count number={10} /> +
                    </h4>
                    <p>Experiencias</p>
                  </div>
                </div>
                <div className="tp-faq-counter d-flex align-items-center mb-30">
                  <div className="tp-faq-counter-icon">
                    <span>
                      <Image src={faq_icon_2} alt="image-title-here" />
                    </span>
                  </div>
                  <div className="tp-faq-counter-content">
                    <h4 className="tp-faq-counter-title d-flex">
                      <Count number={500} /> +
                    </h4>
                    <p>Cliente satisfecho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="tp-faq-tab-content tp-accordion wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="accordion" id="general_accordion">
                {accordion_data.map((item, index) => (
                  <div
                    className={`accordion-item ${
                      index === 0 ? "tp-faq-active" : ""
                    }`}
                    key={index}
                  >
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${
                          index === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded={index === 0 ? true : false}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#general_accordion"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaHomeOne;
