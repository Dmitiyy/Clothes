import { unionBy } from "lodash"
import { FC, Fragment, useState, useCallback } from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import { Swiper as SwiperCore } from "swiper/types"
import { Autoplay } from "swiper";
import { IUser } from "../redux/userReducer"
import { ClothesCard } from "./ClothesCard"
import { handleActive } from "./Clothes"

interface IProps {
  isMessage: boolean;
  loading: boolean;
  isUserExist: boolean;
  userData: IUser;
  user: IUser;
}

export const RightSlider: FC<IProps> = ({isMessage, loading, isUserExist, userData, user}) => {
  const [slider, setSlider] = useState<SwiperCore>();

  const handleRightClick = useCallback(() => {
    if (!slider) return;
    slider.slideNext();
  }, [slider]);

  return (
    <div className="right-sidebar__wrap-mobile">
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
                  unionBy(userData.liked!, '_id').map((item) => (
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
  )
}