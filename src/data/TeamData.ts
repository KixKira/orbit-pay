

import { StaticImageData } from "next/image";
// home 01
import team_avatar_img_1 from "@/assets/img/team/img-1.jpg";
import team_avatar_img_2 from "@/assets/img/team/img-2.jpg";
import team_avatar_img_3 from "@/assets/img/team/img-3.jpg";
import team_avatar_img_4 from "@/assets/img/team/img-4.jpg";
// home 02
import team_avatar_img_2_1 from "@/assets/img/team/home-2/user-1.jpg";
import team_avatar_img_2_2 from "@/assets/img/team/home-2/user-2.jpg";
import team_avatar_img_2_3 from "@/assets/img/team/home-2/user-3.jpg";
import team_avatar_img_2_4 from "@/assets/img/team/home-2/user-4.jpg";
// home 03
import team_avatar_img_3_1 from "@/assets/img/team/home-3/img-1.jpg"; 
import team_avatar_img_3_2 from "@/assets/img/team/home-3/img-2.jpg";
import team_avatar_img_3_3 from "@/assets/img/team/home-3/img-3.jpg";


interface DataType {
  id: number;
  home: number;
  delay: string;
  img: StaticImageData;
  title: string;
  designatio: string;
}[]

const team_data: DataType[] = [
  // home 01
  {
    id: 1,
    home: 1,
    delay: ".3s",
    img: team_avatar_img_1,
    title: "Albert Flores",
    designatio: "Designer"
  },
  {
    id: 2,
    home: 1,
    delay: ".5s",
    img: team_avatar_img_2,
    title: "Kathryn Murphy",
    designatio: "Developer"
  },
  {
    id: 3,
    home: 1,
    delay: ".7s",
    img: team_avatar_img_3,
    title: "Marvin McKinney",
    designatio: "Frontend Developer"
  },
  {
    id: 4,
    home: 1,
    delay: ".9s",
    img: team_avatar_img_4,
    title: "Leslie Alexander",
    designatio: "Backend Developer"
  },
  // increase for team page
  {
    id: 3,
    home: 1,
    delay: ".7s",
    img: team_avatar_img_3,
    title: "Marvin McKinney",
    designatio: "Frontend Developer"
  },
  {
    id: 4,
    home: 1,
    delay: ".9s",
    img: team_avatar_img_4,
    title: "Leslie Alexander",
    designatio: "Backend Developer"
  }, 
  {
    id: 2,
    home: 1,
    delay: ".5s",
    img: team_avatar_img_2,
    title: "Kathryn Murphy",
    designatio: "Developer"
  },
  {
    id: 1,
    home: 1,
    delay: ".3s",
    img: team_avatar_img_1,
    title: "Albert Flores",
    designatio: "Designer"
  },


  // home 02
  {
    id: 1,
    home: 2,
    delay: ".3s",
    img: team_avatar_img_2_1,
    title: "Albert Flores",
    designatio: "Designer"
  },
  {
    id: 2,
    home: 2,
    delay: ".5s",
    img: team_avatar_img_2_2,
    title: "Esther Howard",
    designatio: "Developer"
  },
  {
    id: 3,
    home: 2,
    delay: ".7s",
    img: team_avatar_img_2_3,
    title: "Simmons Brook",
    designatio: "Frontend Developer"
  },
  // home 03
  {
    id: 1,
    home: 3,
    delay: ".3s",
    img: team_avatar_img_3_1,
    title: "Darlene Robertson",
    designatio: "UI UX Designer"
  },
  {
    id: 2,
    home: 3,
    delay: ".5s",
    img: team_avatar_img_3_2,
    title: "Cody Fisher",
    designatio: "PHP Developer"
  },
  {
    id: 3,
    home: 3,
    delay: ".7s",
    img: team_avatar_img_3_3,
    title: "Devon Lane",
    designatio: "Ux Architect"
  }

]
export default team_data