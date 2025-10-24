

import React from 'react';
import Image from 'next/image';
import project_data from '@/data/ProjectData';
import Link from 'next/link';


// filter data from project_data for home 2
const projects = project_data.filter(project => project.home === 2);

const ProjectAreaHomeTwo = () => {



   return (
      <>
         <section id="project-one-page" className="tp-project-area-2 pt-120 pb-90">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-4">
                     <div className="tp-project-title-wrapper-2 mb-60">
                        <span className="tp-section-title-pre">our latest project</span>
                        <h3 className="tp-section-title">Building wealth together</h3>
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-project-tab-wrapper tab-wrapper-2 d-flex justify-content-end wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
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
                                 >
                                    {item.tab_name}
                                 </button>
                              </li>
                           ))}

                        </ul>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <div className="col-lg-12">
                     <div className="tab-content" id="pills-tabContent">
                        {projects.map((item, index) => (
                           <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                              id={`pills-${item.tab_id}`} role="tabpanel" aria-labelledby={`pills-${item.tab_id}-tab`}>
                              <div className="row">

                                 <div className="col-lg-6">
                                    <div className="tp-project-thumb mb-30">
                                       <Image src={item.tab_items[0].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                       <div className="tp-project-thumb-info d-flex align-items-center justify-content-between">
                                          <div className="tp-project-thumb-content">
                                             <p>{item.tab_items[0].category}</p>
                                             <h4 className="tp-project-thumb-title">
                                                <Link href="/project-details">{item.tab_items[0].name}</Link>
                                             </h4>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="tp-project-thumb mb-30">
                                             <Image src={item.tab_items[1].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                             <div className="tp-project-thumb-info d-flex align-items-center justify-content-between">
                                                <div className="tp-project-thumb-content">
                                                   <p>{item.tab_items[1].category}</p>
                                                   <h4 className="tp-project-thumb-title">
                                                      <Link href="/project-details">{item.tab_items[1].name}</Link>
                                                   </h4>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="tp-project-thumb mb-30">
                                             <Image src={item.tab_items[2].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                             <div className="tp-project-thumb-info d-flex align-items-center justify-content-between">
                                                <div className="tp-project-thumb-content">
                                                   <p>{item.tab_items[2].category}</p>
                                                   <h4 className="tp-project-thumb-title">
                                                      <Link href="/project-details">{item.tab_items[2].name}</Link>
                                                   </h4>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-6">
                                    <div className="row">
                                       <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="tp-project-thumb mb-30">
                                             <Image src={item.tab_items[3].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                             <div className="tp-project-thumb-info d-flex align-items-center justify-content-between">
                                                <div className="tp-project-thumb-content">
                                                   <p>{item.tab_items[3].category}</p>
                                                   <h4 className="tp-project-thumb-title">
                                                      <Link href="/project-details">{item.tab_items[3].name}</Link></h4>
                                                </div>

                                             </div>
                                          </div>
                                       </div>

                                       <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="tp-project-thumb mb-30">
                                             <Image src={item.tab_items[4].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                             <div className="tp-project-thumb-info d-flex align-items-center justify-content-between">
                                                <div className="tp-project-thumb-content">
                                                   <p>{item.tab_items[4].category}</p>
                                                   <h4 className="tp-project-thumb-title">
                                                      <Link href="/project-details">{item.tab_items[4].name}</Link></h4>
                                                </div>

                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="tp-project-thumb mb-30">
                                       <Image src={item.tab_items[5].img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                                       <div className="tp-project-thumb-info d-flex align-items-center justify-content-between">
                                          <div className="tp-project-thumb-content">
                                             <p>{item.tab_items[5].category}</p>
                                             <h4 className="tp-project-thumb-title">
                                                <Link href="/project-details">{item.tab_items[5].name}</Link></h4>
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
         </section>
      </>
   );
};

export default ProjectAreaHomeTwo;