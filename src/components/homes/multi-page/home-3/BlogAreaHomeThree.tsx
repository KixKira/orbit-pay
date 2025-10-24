
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blogs = blog_data.filter((item) => item.home === 3);

const BlogAreaHomeThree = () => {
  return (
    <>
      <section id='blog-one-page' className="tp-blog-area-3 pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-title-wrapper-3 text-center mb-40">
                <span className="tp-section-title-pre">latest News</span>
                <h3 className="tp-section-title">Empowering your financial <br /> freedom</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tp-blog-item-wrapper-2 blog-3 p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-blog-item-thumb-2">
                    <Link href="/blog-details">
                      <Image src={item.img} alt="image-title-here" />
                    </Link>
                  </div>
                  <div className="tp-blog-item-content-3">
                    <div className="tp-blog-item-info-3 d-flex justify-content-center">
                      <span><i className="fa-regular fa-calendar-days"></i> {item.date} {item.month} {new Date().getFullYear()}</span>
                      <span><i className="fa-sharp fa-light fa-comments"></i> {item.comments} Comments</span>
                    </div>
                    <h4 className="tp-blog-item-title"><Link href="/blog-details">{item.title}</Link></h4>
                    <p>{item.sm_des}</p>
                    <div className="tp-blog-item-btn-3">
                      <Link href="/blog-details">Learn More <span><i className="fa-regular fa-arrow-right"></i></span></Link>
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

export default BlogAreaHomeThree;