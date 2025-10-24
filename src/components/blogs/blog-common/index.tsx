'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import post_thumb_1 from "@/assets/img/blog/postbox/img-5.jpg";
import post_thumb_2 from "@/assets/img/blog/postbox/img-6.jpg";
import post_thumb_3 from "@/assets/img/blog/postbox/img-7.jpg";
import post_icon from "@/assets/img/blog/postbox/icon-1.svg";

const post_data = [
  {
    id: 1,
    img: post_thumb_1,
    title: "Transforming businesses for the digital age",
    date: "October 19, 2024",
  },
  {
    id: 2,
    img: post_thumb_2,
    title: "Unlocking the potential of your business",
    date: "October 19, 2024",
  },
  {
    id: 3,
    img: post_thumb_3,
    title: "Navigating challenges to reach new heights",
    date: "October 19, 2024",
  }
]


const BlogSlidebar = () => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="tp-sidebar-wrapper">
          <div className="tp-sidebar-widget-search mb-40">
            <div className="tp-sidebar-widget-content">
              <div className="tp-sidebar-search">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="tp-sidebar-search-input">
                    <input type="text" placeholder="Search" />
                    <button type="submit"><i className="far fa-search"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="tp-sidebar-widget mb-40">
            <h3 className="tp-sidebar-widget-title">Categories</h3>
            <div className="tp-sidebar-widget-content">
              <ul>
                <li><Link href="/blog-details"><i className="fa-solid fa-chevrons-right"></i> Agency</Link></li>
                <li><Link href="/blog-details"><i className="fa-solid fa-chevrons-right"></i> Corporate</Link></li>
                <li><Link href="/blog-details"><i className="fa-solid fa-chevrons-right"></i> Business</Link></li>
              </ul>
            </div>
          </div>

          <div className="tp-sidebar-widget mb-40">
            <h3 className="tp-sidebar-widget-title">Recent Post</h3>
            <div className="tp-sidebar-widget-content">
              <div className="tp-sidebar-post tp-rc__post">
                {post_data.map((item) => (
                  <div key={item.id} className="tp-rc__post d-flex align-items-center">
                    <div className="tp-rc__post-thumb mr-25">
                      <Link href="/blog-details"><Image src={item.img} alt="image-title-here" /></Link>
                    </div>
                    <div className="tp-rc__post-content">
                      <h3 className="tp-rc__post-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="tp-rc__post-meta">
                        <span><i className="fa-regular fa-calendar-days"></i> {item.date}</span>
                      </div>
                    </div>
                  </div>
                ))} 

              </div>
            </div>
          </div>

          <div className="tp-sidebar-work mb-40 p-relative" style={{ backgroundImage: "url(/assets/img/blog/postbox/img-8.jpg)" }}>
            <h3 className="tp-sidebar-work-title text-center">Work with us</h3>
            <div className="tp-sidebar-work-content text-center">
              <div className="tp-sidebar-work-icon">
                <span>
                  <Image src={post_icon} alt="image-title-here" />
                </span>
              </div>
              <p>Aliquam posuere loborti viverra atti ullamcer posuere viverra .Aliquam er.Aliquam r justo, posuere loborti viverra atti ullam</p>
            </div>
          </div>

          <div className="tp-sidebar-widget">
            <h3 className="tp-sidebar-widget-title">Tags</h3>
            <div className="tp-sidebar-widget-content">
              <div className="tagcloud">
                <a href="#">Start shape</a>
                <a href="#">Architecture</a>
                <a href="#">Large</a>
                <a href="#">Business</a>
                <a href="#">Stretegy</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogSlidebar;