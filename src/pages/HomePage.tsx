import { FC } from "react";
import { Card } from "../components/Card";

const HomePage: FC = () => {
  return (
    <div className="w-[1000px] m-auto pt-[30px] pb-[30px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#fff] font-bold text-center text-xl tracking-widest">Inspiration Board</h1>
        <div className="flex items-center">
          <p className="text-[#fff] mr-[15px] text-base">Dmitry Pieshkov</p>
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-full" />
        </div>
      </div>
      <div className="w-[100%] mt-[30px]">
        <div className="flex justify-between items-start">
          <div className="p-[20px] bg-grey-main rounded-[20px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[#fff] text-[20px] font-bold">Terrible Ideas</h2>
              <div className="flex justify-center items-center text-[30px] text-[#fff]
              w-[50px] h-[50px] bg-[#55585d] rounded-full cursor-pointer">
                <span className="mt-[-3px] select-none">+</span>
              </div>
            </div>
            {
              [0, 1, 2].map(item => {return <div key={item}><Card isImage={item === 1 ? true : false} /></div>})
            }
          </div>
          <div className="p-[20px] bg-grey-main rounded-[20px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[#fff] text-[20px] font-bold">Good Ideas</h2>
              <div className="flex justify-center items-center text-[30px] text-[#fff]
              w-[50px] h-[50px] bg-[#55585d] rounded-full cursor-pointer">
                <span className="mt-[-3px] select-none">+</span>
              </div>
            </div>
            {
              [0, 1, 2].map(item => {return <div key={item}><Card /></div>})
            }
          </div>
          <div className="p-[20px] bg-grey-main rounded-[20px]">
            <div className="flex justify-between items-center">
              <h2 className="text-[#fff] text-[20px] font-bold">Incredible Ideas</h2>
              <div className="flex justify-center items-center text-[30px] text-[#fff]
              w-[50px] h-[50px] bg-[#55585d] rounded-full cursor-pointer">
                <span className="mt-[-3px] select-none">+</span>
              </div>
            </div>
            {
              [0, 1, 2].map(item => {return <div key={item}><Card /></div>})
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;