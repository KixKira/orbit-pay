

import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type DataType = {
  subtitle: string;
  title: React.JSX.Element;
}

const blog_content: DataType = {
  subtitle: 'New blogs',
  title: <>Building better businesses <br /> together</>,
}
const { subtitle, title } = blog_content;

const blogs = blog_data.filter(item => item.home === 1);

const BlogAreaHomeOne = ({style}: any) => {
  return (
    <>
      <section id='blog-one-page' className={`tp-blog-area pt-120 ${style? "" : "pb-90"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-title-wrapper text-center mb-40">
                <span className="tp-section-title-pre">{subtitle}</span>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tp-blog-item-wrapper p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-blog-item-thumb">
                    <Link href="/blog-details">
                      <Image src={item.img} alt="image-title-here" />
                    </Link>
                  </div>
                  <div className="tp-blog-item-date">
                    <h4>{item.date}</h4>
                    <p>{item.month}</p>
                  </div>
                  <div className="tp-blog-item-content">
                    <div className="tp-blog-item-info d-flex">
                      <span><i className="fa-regular fa-user"></i> <a href="#">By admin</a></span>
                      <span><i className="fa-regular fa-comments"></i><a href="#">Comments ({item.comments})</a></span>
                    </div>
                    <h4 className="tp-blog-item-title">
                      <Link href="/blog-details">
                        {item.title}
                      </Link></h4>
                    <div className="tp-blog-item-btn text-end">
                      <Link href="/blog-details">
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaHomeOne;