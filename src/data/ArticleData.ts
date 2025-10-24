import { StaticImageData } from "next/image";


import post_img_1 from "@/assets/img/blog/postbox/img-1.jpg";
import post_img_2 from "@/assets/img/blog/postbox/img-2.jpg";
import post_img_3 from "@/assets/img/blog/postbox/img-3.jpg";
import post_img_4 from "@/assets/img/blog/postbox/img-4.jpg";


interface DataType {
  id: number;
  post_with_img?: boolean;
  img?: StaticImageData | any;
  date: number;
  month: string;
  comments: number;
  title: string;
  description: string;
  post_with_video?: boolean;
  post_with_slider?: boolean;
  slider_img?: StaticImageData[] | any;
}

const article_data: DataType[] = [
  {
    id: 1,
    post_with_img: true,
    img: post_img_1,
    date: 28,
    month: "June",
    comments: 15,
    title: "Building digital experiences that matter",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  {
    id: 2,
    post_with_video: true,
    img: post_img_2,
    date: 21,
    month: "June",
    comments: 35,
    title: "Partnering with businesses to achieve their goals",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  {
    id: 3,
    post_with_img: true,
    img: post_img_3,
    date: 14,
    month: "June",
    comments: 44,
    title: "Empowering businesses with data-driven insights",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  {
    id: 4,
    post_with_slider: true,
    slider_img: [
      post_img_4,
      post_img_3,
      post_img_2,
      post_img_1,
    ],
    date: 12,
    month: "June",
    comments: 44,
    title: "Empowering businesses with data-driven insights",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  // for pagination
  {
    id: 5,
    post_with_video: true,
    img: post_img_2,
    date: 21,
    month: "June",
    comments: 35,
    title: "Partnering with businesses to achieve their goals",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  {
    id: 6,
    post_with_img: true,
    img: post_img_1,
    date: 14,
    month: "June",
    comments: 44,
    title: "Empowering businesses with data-driven insights",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  // for pagination
  {
    id: 2,
    post_with_video: true,
    img: post_img_2,
    date: 21,
    month: "June",
    comments: 35,
    title: "Partnering with businesses to achieve their goals",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  {
    id: 3,
    post_with_img: true,
    img: post_img_1,
    date: 14,
    month: "June",
    comments: 44,
    title: "Empowering businesses with data-driven insights",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
  {
    id: 4,
    post_with_slider: true,
    slider_img: [
      post_img_3,
      post_img_2,
      post_img_1,
      post_img_4,
    ],
    date: 12,
    month: "June",
    comments: 44,
    title: "Empowering businesses with data-driven insights",
    description: "Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuere lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoet Aliqam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra`",
  },
]

export default article_data 
