
import { SocialLinksTwo } from '@/components/common/SocialLinks';
import team_data from '@/data/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const team_members = team_data.filter(item => item.home == 3);

const TeamAreaHomeThree = () => {
  return (
    <>
      <section className="tp-team-area-3 pt-120 pb-90 p-relative tp-team-bg-3" style={{ backgroundImage: `url(/assets/img/team/home-3/bg-team.png)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-title-wrapper-3 text-center mb-50">
                <span className="tp-section-title-pre">meet our expert</span>
                <h3 className="tp-section-title">Grow your wealth with us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {team_members.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tp-team-item-3 p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-team-item-thumb">
                    <Link href="/team-details"><Image src={item.img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" /></Link>
                  </div>
                  <div className="tp-team-info-2 text-center">
                    <h4 className="tp-team-info-title"><Link href="/team-details">{item.title}</Link></h4>
                    <p>{item.designatio}</p>
                  </div>
                  <div className="tp-team-social-3">
                    <SocialLinksTwo />
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

export default TeamAreaHomeThree;