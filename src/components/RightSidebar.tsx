import { FC, Fragment, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

import useGetUser from "../hooks/useGetUser";
import { ClothesCard } from "./ClothesCard";
import { Swiper as SwiperCore } from "swiper/types";
import { AppDispatch, useAppSelector } from "../redux";
import 'swiper/css';
import { handleActive } from "./Clothes";
import { uniqBy } from "lodash";
import { useDispatch } from "react-redux";

export const RightSidebar: FC = () => {
  const { user, login, loading } = useGetUser();
  const [slider, setSlider] = useState<SwiperCore>();
  const { data: userData } = useAppSelector(state => state.user);
  const isUserExist = user && userData && Object.entries(userData).length !== 0;
  const dispatch = useDispatch<AppDispatch>();
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);

  const handleRightClick = useCallback(() => {
    if (!slider) return;
    slider.slideNext();
  }, [slider]);

  useEffect(() => {
    if (isUserExist && userData.liked!.length === 0 || loading) {setIsMessage(true)}
    else if (!isUserExist) {setIsMessage(true)}
    else {setIsMessage(false)};
  }, [loading, isUserExist, userData]);

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
                <svg
                  onClick={() => {setIsLogoutOpen(prev => !prev)}} 
                  width="34" height="51" viewBox="0 0 34 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 34C1.34315 34 -0.0268517 32.6466 0.264023 31.0155C0.478832 29.811 0.82357 28.6302 1.29405 27.4944C2.14838 25.4318 3.40059 23.5578 4.97919 21.9792C6.55778 20.4006 8.43185 19.1484 10.4944 18.294C12.5569 17.4397 14.7675 17 17 17C19.2325 17 21.4431 17.4397 23.5056 18.294C25.5682 19.1484 27.4422 20.4006 29.0208 21.9792C30.5994 23.5578 31.8516 25.4318 32.706 27.4944C33.1764 28.6302 33.5212 29.811 33.736 31.0155C34.0269 32.6467 32.6569 34 31 34L17 34H3Z" fill="#fff"/>
                  <path d="M26.775 9.5625C26.775 14.8437 22.3035 19.125 16.7875 19.125C11.2716 19.125 6.80005 14.8437 6.80005 9.5625C6.80005 4.28128 11.2716 0 16.7875 0C22.3035 0 26.775 4.28128 26.775 9.5625Z" fill="#fff"/>
                </svg>
              </span>
              <AnimatePresence>
                {
                  isLogoutOpen && (
                    <motion.div 
                      className="right-sidebar__logout" initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
                        <defs>
                        </defs>
                        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                          <path d="M 89.618 46.911 c 0.067 -0.162 0.105 -0.33 0.154 -0.497 c 0.043 -0.146 0.099 -0.285 0.129 -0.436 C 89.966 45.656 90 45.329 90 45.001 c 0 0 0 -0.001 0 -0.001 l 0 0 c 0 -0.328 -0.034 -0.656 -0.099 -0.979 c -0.029 -0.148 -0.085 -0.285 -0.127 -0.428 c -0.05 -0.169 -0.089 -0.341 -0.157 -0.505 c -0.07 -0.169 -0.166 -0.322 -0.253 -0.481 c -0.069 -0.127 -0.125 -0.258 -0.206 -0.38 c -0.184 -0.275 -0.392 -0.532 -0.625 -0.764 L 69.815 22.745 c -1.951 -1.952 -5.119 -1.952 -7.07 0 c -1.953 1.953 -1.953 5.119 0 7.071 L 72.929 40 h -43.35 c -2.761 0 -5 2.239 -5 5 c 0 2.762 2.239 5 5 5 h 43.35 L 62.745 60.185 c -1.953 1.952 -1.953 5.118 0 7.07 c 0.976 0.977 2.256 1.465 3.535 1.465 s 2.56 -0.488 3.535 -1.465 L 88.53 48.54 c 0.235 -0.234 0.445 -0.492 0.629 -0.769 c 0.077 -0.116 0.13 -0.241 0.196 -0.362 C 89.447 47.245 89.546 47.086 89.618 46.911 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                          <path d="M 85 90 H 5 c -2.761 0 -5 -2.238 -5 -5 V 5 c 0 -2.761 2.239 -5 5 -5 h 80 c 2.762 0 5 2.239 5 5 v 14.395 c 0 2.761 -2.238 5 -5 5 s -5 -2.239 -5 -5 V 10 H 10 v 70 h 70 v -9.395 c 0 -2.762 2.238 -5 5 -5 s 5 2.238 5 5 V 85 C 90 87.762 87.762 90 85 90 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                        </g>
                      </svg>
                      <p><span>Log out</span></p>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </Fragment>
          )
        }
      </div>
      <h2>Liked</h2>
      <div>
        {
          isMessage && (
            <div className="message">
              {loading && (<p>Loading, please wait...</p>)} 
              {!isUserExist && !loading && (
                <Fragment>
                  <p>You haven't logged in yet</p>
                  <p>Please log in</p>
                  <span>😟</span>
                </Fragment>
              )}
              {isUserExist && userData.liked!.length === 0 && (
                <Fragment>
                  <p>You haven't liked any suit yet</p>
                  <p>Please like a suit</p>
                  <span>😟</span>
                </Fragment>
              )}
            </div>
          )
        }
        <div className="right-sidebar__saved">
          {
            isUserExist && (
              <Fragment>
                <Swiper
                  onSwiper={setSlider}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  modules={[Autoplay]}
                  autoplay={{delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true}}
                >
                  {
                    uniqBy(userData.liked!, '_id').map((item) => (
                      <SwiperSlide key={item._id}>
                        <ClothesCard 
                          value={item} 
                          isLike={handleActive('liked', item, userData)} 
                          isSaved={handleActive('saved', item, userData)} 
                        />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                {
                  user && userData.liked && userData.liked!.length !== 0 && (
                    <div className="right-sidebar__left" onClick={handleRightClick}>
                      <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
                      </svg>
                    </div>
                  )
                }
              </Fragment>
            )
          }
        </div>
      </div>
    </div>
  )
}