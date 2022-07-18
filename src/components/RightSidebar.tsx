import { FC, Fragment, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import useGetUser from "../hooks/useGetUser";
import { ClothesCard } from "./ClothesCard";
import { Swiper as SwiperCore } from "swiper/types";
import 'swiper/css';

export const RightSidebar: FC = () => {
  const { user, login, loading } = useGetUser();
  const [slider, setSlider] = useState<SwiperCore>();

  const handleRightClick = useCallback(() => {
    if (!slider) return;
    slider.slideNext();
  }, [slider]);

  return (
    <div className='right-sidebar'>
      <div className='right-sidebar__title'>
        {
          login || loading ? (
            <Link to='home/login'>Log in</Link>
          ) : (
            <Fragment>
              <h3>{user.name}</h3>
              <span>
                <svg width="34" height="51" viewBox="0 0 34 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 34C1.34315 34 -0.0268517 32.6466 0.264023 31.0155C0.478832 29.811 0.82357 28.6302 1.29405 27.4944C2.14838 25.4318 3.40059 23.5578 4.97919 21.9792C6.55778 20.4006 8.43185 19.1484 10.4944 18.294C12.5569 17.4397 14.7675 17 17 17C19.2325 17 21.4431 17.4397 23.5056 18.294C25.5682 19.1484 27.4422 20.4006 29.0208 21.9792C30.5994 23.5578 31.8516 25.4318 32.706 27.4944C33.1764 28.6302 33.5212 29.811 33.736 31.0155C34.0269 32.6467 32.6569 34 31 34L17 34H3Z" fill="#fff"/>
                  <path d="M26.775 9.5625C26.775 14.8437 22.3035 19.125 16.7875 19.125C11.2716 19.125 6.80005 14.8437 6.80005 9.5625C6.80005 4.28128 11.2716 0 16.7875 0C22.3035 0 26.775 4.28128 26.775 9.5625Z" fill="#fff"/>
                </svg>
              </span>
            </Fragment>
          )
        }
      </div>
      <h2>Saved</h2>
      <div>
        <div className="right-sidebar__saved">
          <Swiper
            onSwiper={setSlider}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true}}
          >
            <SwiperSlide><ClothesCard value={{}} /></SwiperSlide>
            <SwiperSlide><ClothesCard value={{}} /></SwiperSlide>
            <SwiperSlide><ClothesCard value={{}} /></SwiperSlide>
            <SwiperSlide><ClothesCard value={{}} /></SwiperSlide>
          </Swiper>
          <div className="right-sidebar__left" onClick={handleRightClick}>
            <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}