'use client'
import Link from 'next/link';
import NavMenu from './Menu/NavMenu';
import React, { useState } from 'react';
import UseSticky from '@/hooks/UseSticky';
import OnPageMenu from './Menu/OnPageMenu';

import Image from 'next/image';
import Offcanvas from './Menu/Offcanvas';
import SearchBar from './Menu/SearchBar';
import HeaderLogo from "@/assets/img/logo/logo.png";
import HeaderLogoDark from "@/assets/img/logo/logo-black.png";
import { SocialLinksTwo } from '@/components/common/SocialLinks';

const Headerthree = ({ onePageHomeOne }: any) => {
   const { sticky } = UseSticky();
   const [searchOpen, setSearchOpen] = useState<boolean>(false);
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   return (
      <>

         <header className="tp-header-area-3 p-relative">
            <div className="tp-header-box-3">
               <div className="tp-header-logo-3 d-none d-xl-block">
                  <Link href="/">
                     <Image src={HeaderLogo} alt="image-title-here" />
                  </Link>
               </div>

               <div className="tp-header-box-main-3">
                  <div className="tp-header-top-3 d-none d-xl-block">
                     <div className="container-fluid">
                        <div className="row align-items-center">
                           <div className="col-xxl-7 col-xl-9">
                              <div className="tp-header-top-info-3">
                                 <ul>
                                    <li>
                                       <a href="mailto:info@example.com"><span><i className="fa-solid fa-envelope"></i></span>info@example.com</a>
                                    </li>
                                    <li>
                                       <a href="https://www.google.com/maps/search/6391+Elgin+St,+Wilmington,+DE,+USA/@39.7298967,-75.5645038,13z/data=!3m1!4b1" target="_blank"><span><i className="fa-sharp fa-solid fa-location-dot"></i></span>6391 Elgin St. Celina, 10299</a>
                                    </li>
                                    <li>
                                       <a href=""><span><i className="fa-solid fa-clock"></i></span>Sunday - Friday:<b>9 am - 8 pm</b></a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-xxl-5 col-xl-3">
                              <div className="tp-header-top-right-3 d-flex justify-content-end align-items-center">
                                 <div className="tp-header-top-social-3">
                                    <SocialLinksTwo />
                                 </div>
                                 <div className="tp-header-top-support d-xxl-flex d-none">
                                    <a href="#">Help /</a>
                                    <a href="#">Support /</a>
                                    <a href="#">contact</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="tp-header-wrapper-3">
                     <div className="container-fluid">
                        <div className="row align-items-center">
                           <div className="col-xxl-6 col-xl-7 col-6">
                              <div className="tp-main-menu home-3 align-items-center justify-content-between d-flex">
                                 <div className="tp-main-menu-logo d-block d-xl-none">
                                    <Link href="/">
                                       <Image src={HeaderLogoDark} alt="image-title-here" />
                                    </Link>
                                 </div>
                                 <div className="d-none d-xl-flex">
                                    <nav className="tp-main-menu-content">
                                       {!onePageHomeOne && <NavMenu />}
                                       {onePageHomeOne && <OnPageMenu onePageHomeOne={onePageHomeOne} />}
                                    </nav>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-xl-5 col-6">
                              <div className="tp-header-main-right-3 d-flex align-items-center justify-content-xl-end">
                                 <div className="tp-header-contact d-xl-flex d-none align-items-center">
                                    <div className="tp-header-contact-inner-3 d-xxl-flex align-items-center d-none">
                                       <div className="tp-header-icon-3">
                                          <span><i className="fa-solid fa-phone"></i></span>
                                       </div>
                                       <div className="tp-header-contact-content">
                                          <p>Requesting A Call:</p>
                                          <span><a href="tel:555-0111">(629) 555-0129</a></span>
                                       </div>
                                    </div>
                                    <div className="tp-header-contact-search-3 search-open-btn">
                                       <span onClick={() => setSearchOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                    <div className="tp-header-btn-3">
                                       <Link className="tp-btn" href="/contact">Booking Consultation</Link>
                                    </div>
                                 </div>
                                 <div className="tp-header-main-right-hamburger-btn d-xl-none offcanvas-open-btn text-end">
                                    <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
                                       <span></span>
                                       <span></span>
                                       <span></span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <header id="header-sticky" className={`tp-header-main-sticky p-relative ${sticky ? 'tp-header-sticky' : ''}`}>
            <div className="tp-header-space-2">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-6">
                        <div className="tp-header-logo-2 p-relative">
                           <Link href="/">
                              <Image src={HeaderLogoDark} alt="image-title-here" />
                           </Link>
                        </div>
                     </div>
                     <div className="col-lg-6 d-none d-xl-block">
                        <div className="tp-main-menu home-2 d-none d-xl-block">
                           <nav className="tp-main-menu-content">
                              {!onePageHomeOne && <NavMenu />}
                              {onePageHomeOne && <OnPageMenu onePageHomeOne={onePageHomeOne} />}
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-3 col-6">
                        <div className="tp-header-main-right-2 d-flex align-items-center justify-content-xl-end">
                           <div className="tp-header-contact-2 d-flex align-items-center">
                              <div className="tp-header-contact-search search-open-btn d-none d-xxl-block">
                                 <span onClick={() => setSearchOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></span>
                              </div>
                              <div className="tp-header-contact-inner d-none d-xl-flex align-items-center">
                                 <div className="tp-header-contact-icon">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                 </div>
                                 <div className="tp-header-contact-content">
                                    <p>Requesting A Call:</p>
                                    <span><a href="tel:555-0111">(629) 555-0129</a></span>
                                 </div>
                              </div>
                           </div>
                           <div className="tp-header-main-right-hamburger-btn d-xl-none offcanvas-open-btn text-end">
                              <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>


         <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
         <Offcanvas menuOpen={menuOpen} setMenuOpen={setMenuOpen} onePageHomeOne={onePageHomeOne} />


      </>
   );
};

export default Headerthree;