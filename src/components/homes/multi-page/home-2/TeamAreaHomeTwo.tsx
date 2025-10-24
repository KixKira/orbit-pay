
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import team_data from '@/data/TeamData';
import team_sahpe from "@/assets/img/team/home-2/bg.png";
import polygon_img from "@/assets/img/team/home-2/polygon.png";
import { TeamSocialLinks } from '@/components/common/SocialLinks';

type DataType = {
  subtitle: string;
  title: React.JSX.Element;
}

const team_content: DataType = {
  subtitle: 'our team',
  title: <> Our extreme <br /> hardworking Member</>,
}
const { subtitle, title } = team_content;

const team_members = team_data.filter((item) => item.home === 2);

const TeamAreaHomeTwo = () => {
  return (
    <>
      <section className="tp-team-area-2 pt-120 pb-120 p-relative">
        <div className="tp-team-overlay-2"></div>
        <div className="tp-team-bg">
          <Image src={team_sahpe} alt="image-title-here" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-title-wrapper-2 text-center mb-60">
                <span className="tp-section-title-pre">{subtitle}</span>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {team_members.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="tp-team-item-2 p-relative wow fadeInUp" data-wow-duration="1s"
                  data-wow-delay={item.delay}>
                  <div className="tp-team-item-thumb-2">
                    <Link href="/team-details">
                      <Image src={item.img} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                    </Link>
                    <Image className="shape" src={polygon_img} alt="image-title-here" />
                  </div>
                  <div className="tp-team-social-2">
                    <TeamSocialLinks />
                  </div>
                  <div className="tp-team-info-2 text-center">
                    <h4 className="tp-team-info-title"><Link href="/team-details">{item.title}</Link></h4>
                    <p>{item.designatio}</p>
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

export default TeamAreaHomeTwo;