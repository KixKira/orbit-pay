'use client'
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import Image from 'next/image';
import VideoThumb from "@/assets/img/team/home-2/img-1.jpg";


const VideoAreaHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="tp-team-video-area tp-team-video-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-video-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <Image src={VideoThumb} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                <div className="tp-play-btn">
                  <a className="play-btn popup-video" 
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i className="fa-solid fa-play"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"8Oa21aCw8nU"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoAreaHomeTwo;