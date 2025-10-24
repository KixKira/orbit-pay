

import project_data from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = project_data.filter((item) => item.home === 3);

const ProjectAreaHomeThree = () => {
  return (
    <>
      <section id="project-one-page" className="tp-project-area-3 pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="tp-project-title-wrapper-3 text-center mb-30">
                <span className="tp-section-title-pre">Latest project</span>
                <h3 className="tp-section-title">Invest in your future <br /> with us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-tab-wrapper d-flex justify-content-center">
                <ul className="nav nav-pills mb-5 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" id="pills-tab" role="tablist">

                  {projects.map((item, index) => (
                    <li key={index} className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                        id={`pills-${item.tab_id}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${item.tab_id}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-${item.tab_id}`}
                        aria-selected={index === 0 ? "true" : "false"}
                      >{item.tab_name}</button>
                    </li>

                  ))}

                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                {projects.map((item, index) => (
                  <div key={index}
                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                    id={`pills-${item.tab_id}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${item.tab_id}-tab`}>
                    <div className="row">
                      {item.tab_items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                          <div className="tp-project-item-3 text-center mb-30">
                            <div className="tp-project-thumb-3">
                              <Link href="/project-details">
                                <Image src={item.img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                              </Link>
                            </div>
                            <div className="tp-project-content-3">
                              <span>{item.category}</span>
                              <h3 className="tp-project-title-3">
                                <Link href="/project-details">{item.name}</Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectAreaHomeThree;