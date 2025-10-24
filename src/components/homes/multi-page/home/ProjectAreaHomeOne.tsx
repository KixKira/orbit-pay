
import project_data from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = project_data.filter(item => item.home === 1);

const ProjectAreaHomeOne = () => {
  return (
    <>
      <section id="project-one-page" className="tp-project-area pb-95">
        <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tp-project-title-wrapper text-center mb-30">
                    <span className="tp-section-title-pre">our latest project</span>
                    <h3 className="tp-section-title">Together we can achieve <br /> anything</h3>
                  </div>
              </div>

              <div className="col-lg-12">
                  <div className="tp-project-tab-wrapper">

                    <ul className="nav nav-pills mb-5 justify-content-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" id="pills-tab" role="tablist">
  
                        {projects.map((item, index) => (
                          <li className="nav-item" role="presentation" key={index}>
                             <button 
                             className={`nav-link ${index === 0 ? 'active' : ''}`} 
                             id={`pills-${item.tab_id}-tab`} 
                             data-bs-toggle="pill" 
                             data-bs-target={`#pills-${item.tab_id}`} 
                             type="button" 
                             role="tab"  
                             aria-controls={`pills-${item.tab_id}`} 
                             aria-selected={index=== 0? "true" : "false"}>{item.tab_name}</button>
                          </li>
                          
                        ))}
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                      {projects.map((item, index) => (
                        <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={`pills-${item.tab_id}`} role="tabpanel" aria-labelledby={`pills-${item.tab_id}-tab`}>
                           
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="tp-project-thumb mb-25">
                                    <Image src={item.tab_items[0].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                    <div className="tp-project-thumb-info">
                                        <p>{item.tab_items[0].title}</p>
                                        <h4 className="tp-project-thumb-title"><Link href="/project-details">{item.tab_items[0].name}</Link></h4>
                                    </div>
                                  </div>
                              </div>
                            <div className="col-lg-6 col-md-6">
                              
                                <div className="tp-project-thumb mb-25">
                                  <Image src={item.tab_items[1].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                  <div className="tp-project-thumb-info">
                                      <p>{item.tab_items[1].title}</p>
                                      <h4 className="tp-project-thumb-title">
                                        <Link href="/project-details">{item.tab_items[1].name}</Link></h4>
                                  </div>
                                </div>
                                <div className="row">

                                  <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="tp-project-thumb small mb-25">
                                        <Image src={item.tab_items[2].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                        <div className="tp-project-thumb-info">
                                        <p>{item.tab_items[2].title}</p>
                                        <h4 className="tp-project-thumb-title">
                                          <Link href="/project-details">{item.tab_items[2].name}</Link></h4>
                                        </div>
                                      </div>
                                  </div>

                                  <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="tp-project-thumb small mb-25">
                                        <Image src={item.tab_items[3].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                        <div className="tp-project-thumb-info">
                                        <p>{item.tab_items[3].title}</p>
                                        <h4 className="tp-project-thumb-title">
                                          <Link href="/project-details">{item.tab_items[3].name}</Link></h4>
                                        </div>
                                      </div>
                                  </div>

                                </div>
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

export default ProjectAreaHomeOne;