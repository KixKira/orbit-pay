
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blogs = blog_data.filter(item => item.home === 2);

const BlogAreaHomeTwo = () => {
  return (
    <>
      <section id="blog-one-page" className="tp-blog-area-2 pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-title-wrapper-2 text-center mb-40">
                <span className="tp-section-title-pre">New blogs</span>
                <h3 className="tp-section-title">Secure your financial <br /> future with us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tp-blog-item-wrapper-2 p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-blog-item-thumb-2">
                    <Link href="/blog-details">
                      <Image src={item.img} alt="image-title-here" />
                    </Link>
                  </div>
                  <div className="tp-blog-item-date-2">
                    <span className="d-flex justify-content-center align-content-center" style={{ padding: '15px 20px' }}> {item.date} {item.month}</span>
                  </div>
                  <div className="tp-blog-item-content-2">
                    <div className="tp-blog-item-info-2 d-flex">
                      <span><i className="fa-regular fa-user"></i> <a href="#">By admin</a></span>
                      <span><a href="#">Comments ({item.comments})</a></span>
                    </div>
                    <h4 className="tp-blog-item-title"><Link href="/blog-details">{item.title}</Link></h4>
                    <p>{item.sm_des}</p>
                    <div className="tp-blog-item-btn-2">
                      <Link href="/blog-details">Read More <span><i className="fa-regular fa-arrow-right-long"></i></span></Link>
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

export default BlogAreaHomeTwo;