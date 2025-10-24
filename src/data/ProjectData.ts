import { StaticImageData } from "next/image";

import project_img_1 from "@/assets/img/project/img-1.jpg";
import project_img_2 from "@/assets/img/project/img-2.jpg";
import project_img_3 from "@/assets/img/project/img-3.jpg";

import project_img_4 from "@/assets/img/project/img-5.jpg";
import project_img_5 from "@/assets/img/project/img-7.jpg";
import project_img_6 from "@/assets/img/project/img-9.jpg";
import project_img_7 from "@/assets/img/project/img-11.jpg";

import project_img_8 from "@/assets/img/project/img-15.jpg";
import project_img_10 from "@/assets/img/project/img-3.jpg";
import project_img_11 from "@/assets/img/project/img-4.jpg";
import project_img_13 from "@/assets/img/project/img-6.jpg";
import project_img_14 from "@/assets/img/project/img-8.jpg";
import project_img_15 from "@/assets/img/project/img-10.jpg";
import project_img_16 from "@/assets/img/project/img-12.jpg";

import project_img_17 from "@/assets/img/project/img-14.jpg";
import project_img_18 from "@/assets/img/project/img-13.jpg";


// home 03 imgages 
import project_img_3_1 from "@/assets/img/project/home-3/img-1.jpg";
import project_img_3_2 from "@/assets/img/project/home-3/img-2.jpg";
import project_img_3_3 from "@/assets/img/project/home-3/img-3.jpg";
import project_img_3_4 from "@/assets/img/project/home-3/img-4.jpg";
import project_img_3_5 from "@/assets/img/project/home-3/img-5.jpg";
import project_img_3_6 from "@/assets/img/project/home-3/img-6.jpg";
import project_img_3_7 from "@/assets/img/project/home-3/img-7.jpg";
import project_img_3_8 from "@/assets/img/project/home-3/img-8.jpg";
import project_img_3_9 from "@/assets/img/project/home-3/img-9.jpg";
import project_img_3_10 from "@/assets/img/project/home-3/img-10.jpg";
import project_img_3_11 from "@/assets/img/project/home-3/img-11.jpg";
import project_img_3_12 from "@/assets/img/project/home-3/img-12.jpg";
import project_img_3_13 from "@/assets/img/project/home-3/img-13.jpg";



import project_img_2_1 from "@/assets/img/project/home-2/img-1.jpg";
import project_img_2_2 from "@/assets/img/project/home-2/img-2.jpg";
import project_img_2_3 from "@/assets/img/project/home-2/img-3.jpg";
import project_img_2_4 from "@/assets/img/project/home-2/img-4.jpg";
import project_img_2_5 from "@/assets/img/project/home-2/img-5.jpg";
import project_img_2_6 from "@/assets/img/project/home-2/img-6.jpg";

import project_img_2_7 from "@/assets/img/project/home-2/img-7.jpg";
import project_img_2_8 from "@/assets/img/project/home-2/img-9.jpg";
import project_img_2_9 from "@/assets/img/project/home-2/img-10.jpg";

import project_img_2_10 from "@/assets/img/project/home-2/img-11.jpg";
import project_img_2_11 from "@/assets/img/project/home-2/img-12.jpg";
import project_img_2_12 from "@/assets/img/project/home-2/img-8.jpg";


import project_img_2_13 from "@/assets/img/project/home-2/img-13.jpg";
import project_img_2_14 from "@/assets/img/project/home-2/img-2.jpg";
import project_img_2_15 from "@/assets/img/project/home-2/img-3.jpg";

import project_img_2_16 from "@/assets/img/project/home-2/img-4.jpg";
import project_img_2_17 from "@/assets/img/project/home-2/img-5.jpg";
import project_img_2_18 from "@/assets/img/project/home-2/img-8.jpg";

import project_img_2_19 from "@/assets/img/project/home-2/img-7.jpg";
import project_img_2_20 from "@/assets/img/project/home-2/img-9.jpg";
import project_img_2_21 from "@/assets/img/project/home-2/img-10.jpg";

import project_img_2_22 from "@/assets/img/project/home-2/img-11.jpg";
import project_img_2_23 from "@/assets/img/project/home-2/img-12.jpg";
import project_img_2_24 from "@/assets/img/project/home-2/img-8.jpg";

import project_img_2_25 from "@/assets/img/project/home-2/img-6.jpg";
import project_img_2_26 from "@/assets/img/project/home-2/img-3.jpg";
import project_img_2_27 from "@/assets/img/project/home-2/img-2.jpg";

import project_img_2_28 from "@/assets/img/project/home-2/img-5.jpg";
import project_img_2_29 from "@/assets/img/project/home-2/img-4.jpg";
import project_img_2_30 from "@/assets/img/project/home-2/img-1.jpg";







interface DataType {
  tab_id: string;
  home: number | string;
  tab_name: string;
  tab_items: {
    img: StaticImageData;
    title?: string;
    category?: string;
    name: string;
  }[];
}[]


const project_data: DataType[] = [
  {
    tab_id: "home",
    home: 1,
    tab_name: "Business",
    tab_items: [
      {
        img: project_img_1,
        title: "Our Projects",
        name: "Financial Planning",
      },
      {
        img: project_img_2,
        title: "Our Projects",
        name: "Investment Planning",
      },
      {
        img: project_img_3,
        title: "Our Projects",
        name: "Wealth Management",
      },
      {
        img: project_img_11,
        title: "Our Projects",
        name: "Women Entrepreneurs",
      }
    ]
  },
  {
    tab_id: "profile",
    home: 1,
    tab_name: "Architecher",
    tab_items: [
      {
        img: project_img_4,
        title: "Our Projects",
        name: "Women Entrepreneurs",
      },
      {
        img: project_img_5,
        title: "Our Projects",
        name: "Financial Planning",
      },
      {
        img: project_img_6,
        title: "Our Projects",
        name: "Investment Planning",
      },
      {
        img: project_img_7,
        title: "Our Projects",
        name: "Wealth Management",
      }
    ]
  },
  {
    tab_id: "contact",
    home: 1,
    tab_name: "Large",
    tab_items: [
      {
        img: project_img_8,
        title: "Our Projects",
        name: "Women Entrepreneurs",
      },
      {
        img: project_img_2,
        title: "Our Projects",
        name: "Financial Planning",
      },
      {
        img: project_img_10,
        title: "Our Projects",
        name: "Investment Planning",
      },
      {
        img: project_img_7,
        title: "Our Projects",
        name: "Wealth Management",
      }
    ]
  },
  {
    tab_id: "interiour",
    home: 1,
    tab_name: "Interiour",
    tab_items: [
      {
        img: project_img_13,
        title: "Our Projects",
        name: "Women Entrepreneurs",
      },
      {
        img: project_img_14,
        title: "Our Projects",
        name: "Financial Planning",
      },
      {
        img: project_img_15,
        title: "Our Projects",
        name: "Investment Planning",
      },
      {
        img: project_img_16,
        title: "Our Projects",
        name: "Wealth Management",
      }
    ]
  },
  {
    tab_id: "about",
    home: 1,
    tab_name: "House",
    tab_items: [
      {
        img: project_img_17,
        title: "Our Projects",
        name: "Women Entrepreneurs",
      },
      {
        img: project_img_14,
        title: "Our Projects",
        name: "Financial Planning",
      },
      {
        img: project_img_6,
        title: "Our Projects",
        name: "Investment Planning",
      },
      {
        img: project_img_18,
        title: "Our Projects",
        name: "Wealth Management",
      }
    ]
  },
  // home 02 
  {
    tab_id: "home",
    home: 2,
    tab_name: "Business",
    tab_items: [
      {
        img: project_img_2_1,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_3,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_2_4,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_5,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_6,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 2,
    tab_name: "Architecher",
    tab_items: [
      {
        img: project_img_2_7,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_8,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_9,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_2_10,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_11,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_12,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 2,
    tab_name: "Large",
    tab_items: [
      {
        img: project_img_2_13,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_14,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_15,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_2_16,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_17,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_18,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 2,
    tab_name: "Interiour",
    tab_items: [
      {
        img: project_img_2_19,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_20,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_21,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_2_22,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_23,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_24,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "about",
    home: 2,
    tab_name: "House",
    tab_items: [
      {
        img: project_img_2_25,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_26,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_27,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_2_28,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_2_29,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_2_30,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },

  // home 03 
  {
    tab_id: "home",
    home: 3,
    tab_name: "Business",
    tab_items: [
      {
        img: project_img_3_1,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_3,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 3,
    tab_name: "Architecher",
    tab_items: [
      {
        img: project_img_3_4,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_5,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_6,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 3,
    tab_name: "Large",
    tab_items: [
      {
        img: project_img_3_7,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_8,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_9,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 3,
    tab_name: "Interiour",
    tab_items: [
      {
        img: project_img_3_10,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_11,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_12,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "about",
    home: 3,
    tab_name: "House",
    tab_items: [
      {
        img: project_img_3_13,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_3,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },

  // project page
  {
    tab_id: "home",
    home: 'project',
    tab_name: "Business",
    tab_items: [
      {
        img: project_img_3_1,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_3,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_4,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_5,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_6,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "profile",
    home: 'project',
    tab_name: "Architecher",
    tab_items: [
      {
        img: project_img_3_7,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_8,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_9,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_10,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_11,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_12,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "contact",
    home: 'project',
    tab_name: "Large",
    tab_items: [
      {
        img: project_img_3_13,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_3,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_7,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_1,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_2,
        category: "Set your goals for",
        name: "Smart Savings",
      },
    ]
  },
  {
    tab_id: "interiour",
    home: 'project',
    tab_name: "Interiour",
    tab_items: [
      {
        img: project_img_3_10,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_11,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_12,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_8,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_9,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_10,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
    ]
  },
  {
    tab_id: "about",
    home: 'project',
    tab_name: "House",
    tab_items: [
      {
        img: project_img_3_13,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
      {
        img: project_img_3_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_3,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_2,
        category: "Artificial Intelligent",
        name: "Automotive System",
      },
      {
        img: project_img_3_5,
        category: "Set your goals for",
        name: "Smart Savings",
      },
      {
        img: project_img_3_7,
        category: "New product unlocked",
        name: "Budget Buddy",
      },
    ]
  },





]
export default project_data