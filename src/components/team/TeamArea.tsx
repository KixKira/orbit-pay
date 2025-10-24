
import team_data from '@/data/TeamData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TeamSocialLinks } from '../common/SocialLinks';

const team_members = team_data.filter(member => member.home === 1);

const TeamArea = () => {
  return (
    <>
      <section className="tp-team-breadcrumb-area pt-120 pb-70">
        <div className="container">

          <div className="row">
            {team_members.map((item, i) =>
              <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-team-item p-relative mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                  <div className="tp-team-item-thumb">
                    <Link href="/team-details">
                      <Image src={item.img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                    </Link>
                  </div>
                  <div className="tp-team-social">
                    <TeamSocialLinks />
                  </div>
                  <div className="tp-team-info text-center">
                    <h4 className="tp-team-info-title"><Link href="/team-details">{item.title}</Link></h4>
                    <p>{item.designatio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;