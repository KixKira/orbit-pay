
import React from 'react';
import Image from 'next/image';

import project_details_img_1 from "@/assets/img/project/project-details/img-1.jpg";
import project_details_img_2 from "@/assets/img/project/project-details/img-2.jpg";


interface DataType {
  title: string;
  sm_info: string;
  project_box: {
    box_1: {
      title: string;
      info: string;
    }[];
    box_2: {
      title: string;
      info: string;
    }[];
  };
  title_2: string;
  sm_info_2: string;
  prodect_list: {
    title: string;
    info: string;
  }[];
}

const project_content: DataType = {
  title: "We make small to large company",
  sm_info: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justo, posere lobortis non, viverra laoreet augue mattis. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros .",
  project_box: {
    box_1: [
      {
        title: "Customer:",
        info: "Hs robin",
      },
      {
        title: "Location:",
        info: "Uk stand H.",
      },
      {
        title: "Value",
        info: "150000  USD",
      },
    ],
    box_2: [
      {
        title: "Category:",
        info: "Home making",
      },
      {
        title: "Contact",
        info: "000-000-0001",
      },
      {
        title: "Date",
        info: "Nov 19, 2023",
      }
    ]

  },
  title_2: "Project Challenging story",
  sm_info_2: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquamsto, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justo,",
  prodect_list: [
    {
      title: "Best Emplementation",
      info: "Oshed fact that a reader will be dist acted bioiiy design ished fact that a reader will.",
    },
    {
      title: "Design make for you",
      info: "Oshed fact that a reader will be dist acted bioiiy design ished fact that a reader will.",
    },
    {
      title: "Finished the process",
      info: "Oshed fact that a reader will be dist acted bioiiy design ished fact that a reader will.",
    },
    {
      title: "Follow Stretegy",
      info: "Oshed fact that a reader will be dist acted bioiiy design ished fact that a reader will.",
    },
  ]

}
const { title, sm_info, project_box, title_2, sm_info_2, prodect_list } = project_content;

const ProjectDetailsArea = () => {
  return (
    <>
      <section className="tp-project-area-3 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-details-thumb">
                <Image src={project_details_img_1} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
              </div>
              <div className="tp-project-details-title-wrapper p-relative">
                <h3 className="tp-project-details-title">{title}</h3>
                <p>{sm_info}</p>
                <div className="tp-project-details-box d-flex">

                  <div className="tp-project-details-box-1">
                    {project_box.box_1.map((item, index) => (
                      <React.Fragment key={index} >
                        <h4 className="tp-project-details-box-title">{item.title}</h4>
                        <p>{item.info}</p>
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="tp-project-details-box-2">
                    {project_box.box_2.map((item, index) => (
                      <React.Fragment key={index}>
                        <h4 className="tp-project-details-box-title">{item.title}</h4>
                        <p>{item.info}</p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tp-project-details-subtitle-wrapper">
                <h3 className="tp-project-details-subtitle">{title_2}</h3>
                <p>{sm_info_2}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="tp-project-details-list">
                <ul>
                  {prodect_list.map((item, index) => (
                    <li key={index}>
                      <span className="tp-project-details-list-title"><i className="fa-solid fa-check"></i> {item.title}</span>
                      <p>{item.info}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-project-details-list-thumb">
                <Image src={project_details_img_2} alt="image-title-here" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsArea;