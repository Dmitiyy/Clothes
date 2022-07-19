import { motion, AnimatePresence } from "framer-motion";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MockClothes from '../images/costume.png';
import { AppDispatch, useAppSelector } from "../redux";
import { changeLikes } from "../redux/costumesReducer";
import { useLikeCostumeMutation } from "../redux/costumesSlice";
import { setUserData } from "../redux/userReducer";

export interface ICostume {
  likes?: number;
  title?: string;
  image?: string;
  sex?: string;
  color?: string;
  event?: string;
  mood?: string;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
}

export const ClothesCard: FC<{value: ICostume, isLike: boolean}> = memo(({ value , isLike }) => {
  const [isQuantityOpen, setIsQuantityOpen] = useState<boolean>(false);
  const [likeTrigger] = useLikeCostumeMutation();
  const { data } = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  // const [likes, setLikes] = useState<number>();

  const likeCostume = () => {
    if (Object.keys(data).length === 0) {navigate('/home/login')}
    else {
      likeTrigger({ costumeId: !value._id ? '' : value._id, userId: data._id! }).unwrap();
      let result: ICostume[] = [];

      if (data.liked?.some(item => item._id === value._id)) {
        result = data.liked!.filter(item => item._id !== value._id);
        // setLikes(prev => prev! - 1);
        dispatch(changeLikes({id: value._id!, data: value.likes! - 1}));
      } else {
        result = [...data.liked!, {...value}];
        // setLikes(prev => prev! + 1);
        // dispatch(setCertainLikes({id: value._id!, data: value.likes! + 1}));
        dispatch(changeLikes({id: value._id!, data: value.likes! + 1}));
      } 
      dispatch(setUserData({ data: {...data, liked: result } }));
    }
  }

  // useEffect(() => {
  //   if (value.likes) {
  //     setLikes(value.likes);
  //   }
  // }, [value.likes]);

  return (
    <div className='clothes-card'>
      <img src={MockClothes} alt="clothes" />
      <div className='clothes-card__content'>
        <div className='clothes-card__content-head'>
          <div className='clothes-card__like'>
            <svg 
              onClick={likeCostume}
              width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.1802 3.4294C26.8441 2.69333 25.3116 2.27002 23.6766 2.27002C20.792 2.27002 18.2086 3.58456 16.5028 5.64584C14.7889 3.58456 12.208 2.27002 9.31943 2.27002C7.68839 2.27002 6.15874 2.69333 4.81965 3.4294C1.9466 5.02052 0 8.07965 0 11.5953C0 12.6017 0.163778 13.567 0.460415 14.47C2.06016 21.6609 16.5028 30.73 16.5028 30.73C16.5028 30.73 30.9359 21.6611 32.5379 14.47C32.8345 13.567 33 12.6004 33 11.5953C33 8.08096 31.0534 5.02277 28.1802 3.4294Z" 
              fill={isLike ? "#DA0037" : "#fff"} />
            </svg>
            <p>{value.likes}</p>
          </div>
          <div className="clothes-card__link" onClick={() => {setIsQuantityOpen(prev => !prev)}}>
            <div>
              {Array(3).fill(1).map((_, index) => (<span key={index} />))}
            </div>
          </div>
        </div>
        <div className='clothes-card__content-btn'>
          <button>+</button>
        </div>
        <AnimatePresence>
          {
            isQuantityOpen && (
              <motion.div 
                className="clothes-card__content-quantity" initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.01123 0.333313C1.7332 0.333313 0.677897 1.38634 0.677897 2.66437L0.666504 23.6666L9.99984 20.1666L19.3332 23.6666V21.9827V2.66665C19.3332 1.39141 18.2751 0.333313 16.9998 0.333313H3.01123ZM3.01123 2.66665H16.9998V20.2988L9.99984 17.6738L3.00212 20.2988L3.01123 2.66665Z" fill="#171717"/>
                </svg>
                <p>Saved <span>21</span> times</p>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
})