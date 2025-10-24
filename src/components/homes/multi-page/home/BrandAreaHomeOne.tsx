
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import brand_img_1 from "@/assets/img/brand/img-1.png";
import brand_img_2 from "@/assets/img/brand/img-2.png";
import brand_img_3 from "@/assets/img/brand/img-3.png";
import brand_img_4 from "@/assets/img/brand/img-4.png";

type DataType = StaticImageData[]
const brand_data:DataType = [
   brand_img_1,
   brand_img_2,
   brand_img_3,
   brand_img_4
]

const BrandAreaHomeOne = () => {
   return (
      <>
         <div className="tp-brand-area tp-brand-background p-relative pb-120">
            <div className="container">
               <div className="tp-brand-wrapper p-relative wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"
                  style={{ backgroundImage: `url(/assets/img/brand/bg-shape.png)` }}>
                  <div className="row">
                     {brand_data.map((item, index) => (
                        <div key={index} className="col-lg-3">
                           <div className={`tp-brand-thumb ${index === 2 ? 'text-center' : ''} ${index === 3 ? 'text-lg-end' : ''}`}>
                              <Image src={item} alt="image-title-here" />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BrandAreaHomeOne;