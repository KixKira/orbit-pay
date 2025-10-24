import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/img-1.jpg";
import demo_img_2 from "@/assets/img/menu/img-2.jpg";
import demo_img_3 from "@/assets/img/menu/img-3.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    demo_img?: StaticImageData | any;
  }[];
}
[];

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Acerca de",
    link: "#",
    // img_dropdown: true,
    // sub_menus: [
    //   {
    //     link: "/",
    //     title: "Home 01",
    //     one_page_link: "/home-1-one-page",
    //     demo_img: demo_img_1,
    //   },
    //   {
    //     link: "/home-2",
    //     title: "Home 02",
    //     one_page_link: "/home-2-one-page",
    //     demo_img: demo_img_2,
    //   },
    //   {
    //     link: "/home-3",
    //     title: "Home 03",
    //     one_page_link: "/home-3-one-page",
    //     demo_img: demo_img_3,
    //   },
    // ],
  },
  {
    id: 2,
    title: "Servicios",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Preguntas Frecuentes",
    link: "#",
    // has_dropdown: true,
    // sub_menus: [
    //   { link: "/services", title: "Services" },
    //   { link: "/services-details", title: "Services Details" },
    // ],
  },
  {
    id: 4,
    title: "Conviertete en Agente",
    link: "#",
    // has_dropdown: true,
    // sub_menus: [
    //   { link: "/project", title: "Project" },
    //   { link: "/project-details", title: "Project Details" },
    //   { link: "/team", title: "Team " },
    //   { link: "/team-details", title: "Team Details" },
    //   { link: "/faq", title: "FAQ" },
    // ],
  },
  {
    id: 5,
    title: "Contáctanos",
    link: "#",
    // has_dropdown: true,
    // sub_menus: [
    //   { link: "/blog", title: "Blog" },
    //   { link: "/blog-details", title: "Blog Details" },
    // ],
  },
  // {
  //   id: 6,
  //   title: "Contact",
  //   link: "/contact",
  //   has_dropdown: false,
  // },
];
export default menu_data;
