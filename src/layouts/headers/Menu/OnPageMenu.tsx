"use client";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import Image, { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/img-1.jpg";
import demo_img_2 from "@/assets/img/menu/img-2.jpg";
import demo_img_3 from "@/assets/img/menu/img-3.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
}
[];
const on_page_menu_data: DataType[] = [
  {
    id: 1,
    title: "Acerca de",
    link: "#",
  },
];

type styleType = {
  onePageHomeOne?: any;
  onePageHomeTwo?: any;
  onePageHomeThree?: any;
};

const OnPageMenu = ({
  onePageHomeOne,
  onePageHomeTwo,
  onePageHomeThree,
}: styleType) => {
  return (
    <ul className="tp-onepage-menu d-flex">
      {/* {on_page_menu_data.map((item, i) => (
        <li key={i} className="has-dropdown">
          <Link href={item.link}>{item.title}</Link>
          {item.img_dropdown && (
            <div className="tp-submenu submenu has-homemenu">
              <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-3">
                {item.sub_menus?.map((sub_item, index) => (
                  <div key={index} className="col homemenu">
                    <div className="homemenu-thumb mb-15">
                      <Image src={sub_item.demo_img} alt="image-title-here" />
                      <div className="homemenu-btn">
                        <Link className="menu-btn show-1" href={sub_item.link}>
                          Multi Page
                        </Link>
                        <br />
                        <Link
                          className="menu-btn show-2"
                          href={sub_item.one_page_link}
                        >
                          One Page
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">
                        <Link href={sub_item.link}>{sub_item.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
      ))} */}
      {onePageHomeOne && (
        <ScrollspyNav
          scrollTargetIds={["Acerca de", "Servicios", "Contacto"]}
          offset={50}
          activeNavClass="is-active"
          scrollDuration="100"
          headerBackground="true"
        >
          <ul>
            <li>
              <a href="#about-one-page">Acerca de</a>
            </li>
            <li>
              <a href="#services-one-page">Servicios</a>
            </li>
            <li>
              <a href="#contact-one-page">Contacto</a>
            </li>
          </ul>
        </ScrollspyNav>
      )}
    </ul>
  );
};

export default OnPageMenu;
