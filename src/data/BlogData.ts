
import { StaticImageData } from "next/image";
import blog_img_1 from "@/assets/img/blog/img-1.jpg";
import blog_img_2 from "@/assets/img/blog/img-2.jpg";
import blog_img_3 from "@/assets/img/blog/img-3.jpg";

import blog_img_2_1 from "@/assets/img/blog/home-2/img-1.jpg";
import blog_img_2_2 from "@/assets/img/blog/home-2/img-2.jpg";
import blog_img_2_3 from "@/assets/img/blog/home-2/img-3.jpg";

import blog_img_3_1 from "@/assets/img/blog/home-3/img-1.jpg";
import blog_img_3_2 from "@/assets/img/blog/home-3/img-2.jpg";
import blog_img_3_3 from "@/assets/img/blog/home-3/img-3.jpg";

interface DataType {
  id: number;
  home: number;
  date: number;
  month: string;
  comments: number;
  delay: string;
  img: StaticImageData;
  title: string;
  sm_des?: string;
}[]

const blog_data: DataType[] = [
  {
    id: 1,
    home: 1,
    date: 28,
    month: "June",
    comments: 13,
    delay: ".3s",
    img: blog_img_1,
    title: "Leading the way in business transformation",
  },
  {
    id: 2,
    home: 1,
    date: 28,
    month: "June",
    comments: 17,
    delay: ".5s",
    img: blog_img_2,
    title: "Innovative solutions for a better future",
  },
  {
    id: 3,
    home: 1,
    date: 28,
    month: "June",
    comments: 25,
    delay: ".7s",
    img: blog_img_3,
    title: "Unleashing the power of your business",
  },

  // home 2
  {
    id: 1,
    home: 2,
    date: 28,
    month: "June",
    comments: 13,
    delay: ".3s",
    img: blog_img_2_1,
    title: "5 Tips for Maintaining Your New Business",
    sm_des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    home: 2,
    date: 28,
    month: "June",
    comments: 17,
    delay: ".5s",
    img: blog_img_2_2,
    title: "5 Tips for Maintaining Your New Business",
    sm_des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    home: 2,
    date: 28,
    month: "June",
    comments: 25,
    delay: ".7s",
    img: blog_img_2_3,
    title: "5 Tips for Maintaining Your New Business",
    sm_des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  // home 3
  {
    id: 1,
    home: 3,
    date: 21,
    month: "June",
    comments: 13,
    delay: ".3s",
    img: blog_img_3_1,
    title: "Leading the way in business transformation",
    sm_des: "Our mission is there are  variations  passages of Lorem Ipsu available,Our mission is there are  variations  passage",
  },
  {
    id: 2,
    home: 3,
    date: 24,
    month: "June",
    comments: 17,
    delay: ".5s",
    img: blog_img_3_2,
    title: "Innovative solutions for a better future",
    sm_des: "Our mission is there are  variations  passages of Lorem Ipsu available,Our mission is there are  variations  passage",
  },
  {
    id: 3,
    home: 3,
    date: 28,
    month: "June",
    comments: 25,
    delay: ".7s",
    img: blog_img_3_3,
    title: "Financial solutions for every stage of life",
    sm_des: "Our mission is there are  variations  passages of Lorem Ipsu available,Our mission is there are  variations  passage",
  }


]
export default blog_data