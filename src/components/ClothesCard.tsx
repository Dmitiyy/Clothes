import { motion, AnimatePresence } from "framer-motion";
import { FC, memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MockClothes from '../images/costume.png';
import { AppDispatch, useAppSelector } from "../redux";
import { changeCostume } from "../redux/costumesReducer";
import { useCostumeActionMutation } from "../redux/costumesSlice";
import { setDataDefault } from "../redux/generateReducer";
import { changeUserCostume, IUser, setUserData } from "../redux/userReducer";

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
  savedTimes?: number;
}

export const ClothesCard: FC<{value: ICostume, isLike: boolean, isSaved: boolean}> = memo(
  ({ value , isLike, isSaved }) => {
  const [isQuantityOpen, setIsQuantityOpen] = useState<boolean>(false);
  const [costumeTrigger] = useCostumeActionMutation();
  const { data } = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleProperties = (
    dataProperty: string, valueProperty: 'likes' | 'savedTimes', reduxUrl: string
  ) => {
    if (!data || Object.keys(data).length === 0) {navigate('/home/login')}
    else {
      costumeTrigger({ 
        costumeId: !value._id ? '' : value._id, userId: data._id!, url: reduxUrl
      }).unwrap();

      const dataProp = data[dataProperty as keyof IUser]! as ICostume[];
      let valueProp = value[valueProperty as keyof ICostume] as number;

      let result: ICostume[] = [];
      let property: number = valueProp!;

      if (dataProp?.some(item => item._id === value._id)) {
        result = dataProp!.filter(item => item._id !== value._id);
        if (reduxUrl === 'like') {property = property - 1};
      } else {
        property = property + 1;
        result = [...dataProp!, {...value, [valueProperty]: property}];
      };

      dispatch(changeCostume({ id: value._id!, data: property, name: valueProperty }));
      dispatch(setUserData({ data: {...data, [dataProperty]: result } }));
      dispatch(setDataDefault({ 
        ini: 'suitsData', data: property, name: valueProperty, suit: true, id: value._id!
      }));

      dispatch(changeUserCostume({
        id: value._id!, 
        data: property, 
        name: valueProperty, 
        dataProperty: dataProperty === 'liked' ? true : false
      }));
    }
  }

  return (
    <div className='clothes-card'>
      <img src={value.image} alt="clothes" className="clothes-card__image" />
      <div className='clothes-card__content'>
        <div className='clothes-card__content-head'>
          <div className='clothes-card__like'>
            <svg 
              onClick={() => {handleProperties('liked', 'likes', 'like')}}
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
          <button 
            onClick={() => {handleProperties('saved', 'savedTimes', 'save')}}
            className={isSaved ? 'clothes-card__btn-active' : ''}
          >
            {
              isSaved ? (
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7234 0.459333C21.3574 0.0920063 20.7573 0.0920063 20.3913 0.459333L9.31098 11.537L3.60464 5.79162C3.23866 5.42295 2.6426 5.42295 2.27393 5.79162L0.274486 7.78971C-0.0914952 8.15435 -0.0914952 8.75445 0.274486 9.12178L8.63957 17.542C9.00555 17.9067 9.60161 17.9067 9.97163 17.542L23.7215 3.79083C24.0928 3.42351 24.0928 2.82206 23.7215 2.45339L21.7234 0.459333Z" fill="white"/>
                </svg>
              ) : '+'
            }
          </button>
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
                <p>Saved <span>{value.savedTimes}</span> times</p>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
})