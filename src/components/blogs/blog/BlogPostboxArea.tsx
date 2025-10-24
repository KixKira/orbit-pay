'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import VideoPopup from '@/modals/VideoPopup';
import ReactPaginate from 'react-paginate';
import article_data from '@/data/ArticleData';
import BlogSlidebar from '../blog-common';



const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    '1700': {
      slidesPerView: 1,
    },
    '1400': {
      slidesPerView: 1,
    },
    '1200': {
      slidesPerView: 1,
    },
    '767': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tp-blog-next-1",
    prevEl: ".tp-blog-prev-1",
  },
}

const BlogPostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const articles = article_data

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="tp-postbox-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="tp-postbox-wrapper">
                {currentItems.map((item, i) =>
                  <article key={i} className="tp-postbox-item mb-50">
                    {item.post_with_img &&
                      <div className="tp-postbox-thumb p-relative">
                        <Link href="/blog-details">
                          <Image style={{ width: "100%", height: "100%" }} src={item.img} alt="image-title-here" />
                        </Link>
                        <div className="tp-postbox-thumb-date text-center">
                          <span>{item.date}</span>
                          <p>{item.month}</p>
                        </div>
                      </div>
                    }
                    {item.post_with_video &&
                      <div className="tp-postbox-thumb p-relative">
                        <Link href="/blog-details">
                          <Image style={{ width: "100%", height: "100%" }} src={item.img} alt="image-title-here" />
                        </Link>
                        <div className="tp-postbox-thumb-btn">
                          <a className="play-btn popup-video"
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-play"></i></a>
                        </div>
                        <div className="tp-postbox-thumb-date text-center">
                          <span>{item.date}</span>
                          <p>{item.month}</p>
                        </div>
                      </div>
                    }

                    {item.post_with_slider &&
                      <div className="tp-postbox-thumb p-relative">
                        <Swiper {...setting} modules={[Navigation, EffectFade]} loop={true} className="tp-blog-post-active swiper-container">
                          {item.slider_img.map((item: any, i: number) =>
                            <SwiperSlide key={i} className="swiper-slide">
                              <Link href="/blog-details">
                                <Image style={{ width: "100%", height: "100%" }} src={item} alt="image-title-here" />
                              </Link>
                            </SwiperSlide>
                          )}
                        </Swiper>
                        <div className="tp-postbox-thumb-date text-center">
                          <span>{item.date}</span>
                          <p>{item.month}</p>
                        </div>
                        <div className="tp-postbox-nav text-end">
                          <button type="button" className="tp-blog-prev-1"><i className="fa-regular fa-arrow-left"></i>
                          </button>
                          <button type="button" className="tp-blog-next-1"><i className="fa-regular fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    }


                    <div className="tp-postbox-content">
                      <div className="tp-postbox-meta">
                        <span><i className="fa-regular fa-user"></i> By Admin</span>
                        <span><a href="#">Comments ({item.comments})</a></span>
                      </div>
                      <h3 className="tp-postbox-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="tp-postbox-text">
                        <p>{item.description}</p>
                      </div>
                      <div className="tp-postbox-read-more">
                        <Link href="/blog-details" className="tp-postbox-btn">
                          <i className="fa-solid fa-arrow-right"></i> Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                )}


                <div className="tp-postbox-pagination">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={9}
                    pageCount={pageCount}
                    previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                    renderOnZeroPageCount={null}
                  />
                </div>



              </div>
            </div>

            <BlogSlidebar /> 

          </div>
        </div>
      </section>


      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"TCHq0O5rMcM"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogPostboxArea;