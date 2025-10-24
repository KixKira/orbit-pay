
import React from 'react';
import accordion_data from '@/data/AccordionData';

const FaqArea = () => {
  return (
    <>
      <section className="tp-faq-breadcrumb-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-faq-breadcrumb-tab-content tp-accordion">
                <div className="accordion" id="general_accordion">
                  {accordion_data.map((item, index) => (
                    <div className={`accordion-item ${index === 0 ? 'tp-faq-active' : ''}`} key={index}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded={index === 0 ? true : false} aria-controls={`collapse${item.id}`}>
                          {item.question}
                        </button>
                      </h2>
                      <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${item.id}`} data-bs-parent="#general_accordion">
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-faq-breadcrumb-tab-content tp-accordion">
                <div className="accordion" id="general_accordion-2">
                  {accordion_data.map((item, index) => (
                    <div className={`accordion-item ${index === 0 ? 'tp-faq-active' : ''}`} key={index}>
                      <h2 className="accordion-header" id={`heading${item.id}2`}>
                        <button
                          className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                          type="button" data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}2`}
                          aria-expanded={index === 0 ? true : false}
                          aria-controls={`collapse${item.id}2`}>
                          {item.question_2}
                        </button>
                      </h2>
                      <div id={`collapse${item.id}2`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading${item.id}2`}
                        data-bs-parent="#general_accordion-2">
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

    </>
  );
};

export default FaqArea;