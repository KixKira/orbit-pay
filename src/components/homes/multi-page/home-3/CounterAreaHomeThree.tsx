
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import bg_shape from "@/assets/img/counter/home-3/bg-shape.png"

import counter_icon_1 from "@/assets/img/counter/home-3/icon-1.svg";
import counter_icon_2 from "@/assets/img/counter/home-3/icon-2.svg";
import counter_icon_3 from "@/assets/img/counter/home-3/icon-3.svg";
import counter_icon_4 from "@/assets/img/counter/home-3/icon-4.svg";
import Count from '@/components/common/Count';

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  counter: number;
}
const counter_data: DataType[] = [
  {
    id: 1,
    icon: counter_icon_1,
    title: 'Project Completed',
    counter: 50
  },
  {
    id: 2,
    icon: counter_icon_2,
    title: 'Award Winning',
    counter: 10
  },
  {
    id: 3,
    icon: counter_icon_3,
    title: 'Business Consult',
    counter: 50
  },
  {
    id: 4,
    icon: counter_icon_4,
    title: 'Client Setishfaction',
    counter: 25
  }
]


const CounterAreaHomeThree = () => {
  return (
    <>
      <section className="tp-counter-area-2 p-relative pt-120 pb-90" style={{ backgroundColor: '#16243E' }}>
        <div className="tp-counter-bg-shape-2">
          <Image src={bg_shape} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
        </div>
        <div className="container">
          <div className="row">
            {counter_data.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-counter-item-2 text-center mb-30">
                  <div className="tp-counter-item-2-icon">
                    <span><Image src={item.icon} style={{ width: '100%', height: 'auto' }} alt="image-title-here" /></span>
                  </div>
                  <h4 className="tp-counter-title-2 d-flex justify-content-center">
                    <Count number={item.counter} add_style={true} /> K
                  </h4>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterAreaHomeThree;