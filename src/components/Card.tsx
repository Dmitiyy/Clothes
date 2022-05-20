import { FC } from "react";
import likeIcon from '../images/like.svg';

interface ICard {
  isImage?: boolean;
}

export const Card: FC<ICard> = ({isImage}) => {
  return (
    <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] card">
      <div className="flex justify-between items-center">
        <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
        <div className="flex cursor-pointer">
          {
            [0, 1, 2].map(item => {
              return (
                <span key={item} 
                className="w-[10px] h-[10px] bg-[#121212] rounded-full block ml-[3px]" />
              )
            })
          }
        </div>
      </div>
      <p className="text-[#121212] text-[16px] mt-[10px]">
        Lorem Ipsum is simply dummy text of the printing and
      </p>
      {
        isImage ? (
          <div className="w-[100%] h-[150px] bg-[#323232] mt-[20px] rounded-[20px]"></div>
        ) : null
      }
      <div className="flex mt-[20px] items-center">
        <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
        <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
        <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
      </div>
    </div>
  )
}