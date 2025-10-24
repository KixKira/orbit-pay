

import React from 'react';
import SocialLinks from '../common/SocialLinks';
import avatar_img from "@/assets/img/team/breadcrumb-img.jpg";
import Image from 'next/image';


interface DataType {
  name: string;
  info: string;
  description: React.JSX.Element;
  phone: string;
  email: string;
  website: string;
  address: string;
  skill_des: string;
  progress: {
    title: string;
    value: number;
  }[];
  outher_title: string;
  features: string[];
  sm_info: string;
}

const team_details_content: DataType = {
  name: 'Albert Flores',
  info: 'Human Resource',
  description: <>sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam</>,
  phone: '(319) 555-0115',
  email: 'debra.holt@example.com',
  website: 'http://yoursite.com/themepure',
  address: '6391 Elgin St. Celina, Delaware 10299',
  skill_des: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s in the ou standard dummy text ever since the 1500s, when an unknown printer took',
  progress: [
    {
      title: "Energy",
      value: 90
    },
    {
      title: "Tecnical",
      value: 95,
    },
    {
      title: "Clients Satisfaction",
      value: 85,
    }
  ],
  outher_title: 'Others Value',
  features: [
    "Mistakes To Avoid to the dummy",
    "Your Startup industry standard loream saum.",
    "Knew About Fonts text the printing and ",
    "Mistakes To Avoid to the dummy printing y"
  ],
  sm_info: "Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's in the abouti standard dummy",

}
const { name, info, description, phone, email, website, address, skill_des, progress, outher_title, features, sm_info } = team_details_content

const TeamDetailsArea = () => {
  return (
    <>
      <section className="tp-team-details-breadcrumb-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-team-details-thumb mb-85">
                <Image src={avatar_img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-team-details-wrapper mb-85">
                <h3 className="tp-team-details-name">{name}</h3>
                <span className="tp-team-details-description">{info}</span>
                <p>{description}</p>
                <div className="tp-team-details-information">
                  <h4>
                    <span>Phone :</span> <a href="tel:5550115">{phone}</a>
                  </h4>
                  <h4>
                    <span>Email :</span> <a href="mailto:debra.holt@example.com">{email}</a>
                  </h4>
                  <h4>
                    <span>Website :</span> <a href="mailto:debra.holt@example.com">{website}</a>
                  </h4>
                  <h4>
                    <span>Address :</span> <a href="https://www.google.com/maps">{address}</a>
                  </h4>
                </div>
                <div className="tp-team-details-social">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="tp-team-details-skills fix">
                <h3 className="tp-team-details-title">{outher_title}</h3>
                <p>{skill_des}</p>
                <div className="tp-team-details-skills-progress">

                  {progress.map((item, index) => (
                    <div key={index} className="tp-team-details-progress-item">
                      <div className="tp-team-details-progress-title p-relative">
                        <h5>{item.title} <span className={`pursent-${index === 0 ? '1' : index === 1 ? '2' : '3'} wow slideInLeft`} data-wow-duration=".8s" data-wow-delay=".3s">{item.value}%</span></h5>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-duration=".8s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          style={{ width: `${item.value}%` }}
                          aria-valuenow={item.value} // Use a number here
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="tp-team-details-value">
                <h3 className="tp-team-details-title">{outher_title}</h3>
                <ul>
                  {features.map((item, index) => (
                    <li key={index}><i className="fa-solid fa-check"></i>{item}</li>
                  ))}
                </ul>
                <p>{sm_info}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;