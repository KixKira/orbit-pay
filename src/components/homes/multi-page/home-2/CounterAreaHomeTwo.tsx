

import React from 'react';
import Image from 'next/image';
import counter_shape_1 from "@/assets/img/counter/img-1.png";
import counter_shape_2 from "@/assets/img/counter/img-2.png";
import counter_shape_3 from "@/assets/img/counter/img-3.png";
import counter_shape_4 from "@/assets/img/counter/img-4.png";

import counter_icon_1 from "@/assets/img/counter/icon-1.svg";
import counter_icon_2 from "@/assets/img/counter/icon-2.svg";
import counter_icon_3 from "@/assets/img/counter/icon-3.svg";
import counter_icon_4 from "@/assets/img/counter/icon-4.svg";
import Count from '@/components/common/Count';

interface DataType {
  id: number;
  counter: number;
  icon: any;
  title: string;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    counter: 200,
    icon: counter_icon_1,
    title: 'Team member',
  },
  {
    id: 2,
    counter: 120,
    icon: counter_icon_2,
    title: 'Project completed',
  },
  {
    id: 3,
    counter: 90,
    icon: counter_icon_3,
    title: 'Setishfied Client',
  },
  {
    id: 4,
    counter: 80,
    icon: counter_icon_4,
    title: 'Awards Received',
  }
]

const CounterAreaHomeTwo = () => {
  return (
    <>
      <section className="tp-counter-area tp-counter-overlay p-relative pt-70 pb-40">
        <div className="container">
          <div className="tp-counter-bg"></div>
          <div className="tp-counter-shape">
            <Image className="shape-1" src={counter_shape_1} alt="image-title-here" />
            <Image className="shape-2" src={counter_shape_2} alt="image-title-here" />
            <Image className="shape-3" src={counter_shape_3} alt="image-title-here" />
            <Image className="shape-4" src={counter_shape_4} alt="image-title-here" />
          </div>
          <div className="row justify-content-center">
            {counter_data.map((item, index) => (
              <div key={index} className="col-lg-3">
                <div className="tp-counter-wrapper d-flex align-items-center justify-content-center mb-30">
                  <div className="tp-counter-icon">
                    <span>
                      <Image src={item.icon} alt="image-title-here" />
                    </span>
                  </div>
                  <div className="tp-counter-content">
                    <h4 className="tp-counter-title d-flex">
                      <Count number={item.counter} /> +
                    </h4>
                    <p>{item.title}</p>
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

export default CounterAreaHomeTwo;