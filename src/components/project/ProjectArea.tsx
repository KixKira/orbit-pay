
import project_data from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = project_data.filter(item => item.home === 'project');

const ProjectArea = () => {
  return (
    <>
      <section className="tp-project-area-3 pt-120 pb-80">
        <div className="container">
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
                {projects.map((tab_item, i) => (
                  <div key={i}
                    className={`tab-pane fade ${i === 0 ? 'show active' : ''}`}
                    id={`pills-${tab_item.tab_id}`} role="tabpanel" aria-labelledby={`pills-${tab_item.tab_id}-tab`}>
                    <div className="row">
                      {tab_item.tab_items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                          <div className="tp-project-item-3 text-center mb-40">
                            <div className="tp-project-thumb-3">
                              <Link href="/project-details"><Image src={item.img} alt="image-title-here" /></Link>
                            </div>
                            <div className="tp-project-content-3">
                              <span>{item.category}</span>
                              <h3 className="tp-project-title-3"><Link href="/project-details">{item.name}</Link></h3>
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

export default ProjectArea;