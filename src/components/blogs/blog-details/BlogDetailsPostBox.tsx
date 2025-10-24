
import React from 'react';
import BlogSlidebar from '../blog-common';
import Image, { StaticImageData } from 'next/image';

import post_thumb_1 from "@/assets/img/blog/blog-details/img-1.jpg";
import post_quote from "@/assets/img/blog/blog-details/quote.png";
import SocialLinks from '@/components/common/SocialLinks';
import user_comment_1 from "@/assets/img/blog/blog-details/img-2.jpg";
import user_comment_2 from "@/assets/img/blog/blog-details/img-3.jpg";
import user_comment_3 from "@/assets/img/blog/blog-details/img-4.jpg";
import CommentPost from '@/components/forms/CommentPost';

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  features_list: {
      title: string;
      info: string;
  }[];
  qoute: string;
  sm_des_3: string;
  sm_des_4: string;
  comments_data: {
      id: number;
      img: StaticImageData;
      name: string;
      designation: string;
      comment: string;
  }[];
}


const blog_details_content:DataType = {
  title: 'Industry stan Women We make small',
  sm_des_1: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper viver laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non",
  sm_des_2: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet auguerper viverra laoreet Aliquam eros justo, posuere loborti ",
  features_list: [
    {
      title: 'Best Emplementation',
      info: "Oshed fact that a reader will be dist acted bioiiy design ished fact that a reader will.",
    },
    {
      title: 'Follow Your Categy',
      info: "Oshed fact that a reader will be dist acted bioiiy design ished fact that a reader will.",
    }
  ],
  qoute: "Aliquam eros justo, posuere loborti viverra laoreetti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis feentum ullamcorper viverra laoreet. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorpe",
  sm_des_3: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet ",
  sm_des_4: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere",
  comments_data: [
    {
      id: 1,
      img: user_comment_1,
      name: "Stanio lainto",
      designation: "October 19, 2023",
      comment: "ished fact that a reader will be distrol acted bioii the.ished fact that a reader <br /> will be distrol acted laoreet Aliquam",
    },
    {
      id: 2,
      img: user_comment_2,
      name: "Nick Jones",
      designation: "October 19, 2023",
      comment: "ished fact that a reader will be distrol acted bioii the.ished fact that a reader <br /> will be distrol acted laoreet Aliquam",
    },
    {
      id: 3,
      img: user_comment_3,
      name: "Don streak",
      designation: "October 19, 2023",
      comment: "ished fact that a reader will be distrol acted bioii the.ished fact that a reader <br /> will be distrol acted laoreet Aliquam",
    }
  ]
}

const { title, sm_des_1, sm_des_2, features_list, qoute, sm_des_3, sm_des_4, comments_data } = blog_details_content

const BlogDetailsPostBox = () => {
  return (
    <>
      <section className="tp-postbox-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="tp-postbox-wrapper">

                <article className="tp-postbox-item-wrapper mb-80">
                  <div className="tp-postbox-item-thumb p-relative">
                    <Image src={post_thumb_1} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                    <div className="tp-postbox-meta2">
                      <span><i className="fa-regular fa-user"></i> By Admin</span>
                      <span><i className="fa-regular fa-folder-open"></i> Category</span>
                      <span><i className="fa-regular fa-calendar-days"></i> October 19, 2023</span>
                      <span><i className="fa-light fa-comments"></i> Comments (05)</span>
                    </div>
                  </div>
                  <h3 className="tp-postbox-title2">{title}</h3>
                  <p>{sm_des_1}</p>

                  <p> {sm_des_2} </p>

                  <div className="tp-postbox-list-wrapper d-flex">
                    {features_list.map((item, index) => (
                      <div key={index} className={`tp-postbox-list ${index === 0 ? 'mr-40' : ''}`}>
                        <h4 className="tp-postbox-list-title"><i className="fa-regular fa-check"></i> {item.title}</h4>
                        <p>{item.info}</p>
                      </div>
                    ))}

                  </div>

                  <div className="tp-postbox-blockquote p-relative">
                    <blockquote>
                      <p>{qoute}</p>
                      <Image src={post_quote} alt="image-title-here" />
                    </blockquote>
                  </div>

                  <p>{sm_des_3}</p>
                  <p>{sm_des_4}</p>
                  <div className="tp-postbox-share-wrapper">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="tp-postbox-share-tags tagcloud">
                          <a href="#">Start shape</a>
                          <a href="#">Architecture</a>
                          <a href="#">Large</a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5">
                        <div className="tp-postbox-share-social text-md-end">
                          <div className="tp-footer-widget-social">
                            <SocialLinks />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="tp-postbox-comment mb-60">
                  <ul>
                    {comments_data.map((item, index) => (
                      <li key={index} className={`${index === 1 ? 'children' : ''}`}>
                        <div className="tp-postbox-comment-box border-mr p-relative">
                          <div className="tp-postbox-comment-box-inner d-flex">
                            <div className="tp-postbox-comment-avater">
                              <Image src={item.img} alt="image-title-here" />
                            </div>
                            <div className="tp-postbox-comment-content">
                              <div className="tp-postbox-comment-author d-flex align-items-center">
                                <h5 className="tp-postbox-comment-name">{item.name}</h5>
                                <p className="tp-postbox-comment-date">{item.designation}</p>
                              </div>
                              <p dangerouslySetInnerHTML={{ __html: item.comment }}></p>
                              <div className="tp-postbox-comment-reply"><a href="#">REPLY<i className="fa-solid fa-paper-plane"></i></a></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>
                </div>

                <CommentPost />

              </div>
            </div>

            <BlogSlidebar />


          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPostBox;