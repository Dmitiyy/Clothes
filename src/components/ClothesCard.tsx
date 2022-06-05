import { FC } from "react";
import MockClothes from '../images/costume.png';

export const ClothesCard: FC = () => {
  return (
    <div className='clothes-card'>
      <img src={MockClothes} alt="clothes" />
      <div className='clothes-card__content'>
        <div className='clothes-card__content-head'>
          <div className='clothes-card__like'>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.1802 3.4294C26.8441 2.69333 25.3116 2.27002 23.6766 2.27002C20.792 2.27002 18.2086 3.58456 16.5028 5.64584C14.7889 3.58456 12.208 2.27002 9.31943 2.27002C7.68839 2.27002 6.15874 2.69333 4.81965 3.4294C1.9466 5.02052 0 8.07965 0 11.5953C0 12.6017 0.163778 13.567 0.460415 14.47C2.06016 21.6609 16.5028 30.73 16.5028 30.73C16.5028 30.73 30.9359 21.6611 32.5379 14.47C32.8345 13.567 33 12.6004 33 11.5953C33 8.08096 31.0534 5.02277 28.1802 3.4294Z" fill="white"/>
            </svg>
            <p>23</p>
          </div>
          <div className="clothes-card__link">
            <div>
              {Array(3).fill(1).map((_, index) => (<span key={index} />))}
            </div>
          </div>
        </div>
        <div className='clothes-card__content-btn'>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}