import { FC } from "react";
import likeIcon from '../images/like.svg';

const HomePage: FC = () => {
  return (
    <div className="w-[1000px] h-[100vh] m-auto pt-[30px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#fff] font-bold text-center text-xl tracking-widest">Inspiration Board</h1>
        <div className="flex items-center">
          <p className="text-[#fff] mr-[15px] text-base">Dmitry Pieshkov</p>
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-full" />
        </div>
      </div>
      <div className="w-[100%] mt-[30px]">
        <h2 className="text-[#fff] tracking-widest text-[20px] mb-[30px]">All Concepts</h2>
        <div className="flex justify-between">
          <div className="p-[20px] bg-grey-main rounded-[20px]">
            <h2 className="text-[#fff] text-[20px] font-bold mb-[20px]">Terrible Ideas</h2>
            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>

            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] mt-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>

            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] mt-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>
          </div>
          <div className="p-[20px] bg-grey-main rounded-[20px]">
            <h2 className="text-[#fff] text-[20px] font-bold mb-[20px]">Good Ideas</h2>
            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>

            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] mt-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>

            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] mt-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>
          </div>
          <div className="p-[20px] bg-grey-main rounded-[20px]">
            <h2 className="text-[#fff] text-[20px] font-bold mb-[20px]">Incredible Ideas</h2>
            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>

            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] mt-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>

            <div className="w-[270px] bg-light-main rounded-[20px] p-[20px] mt-[20px]">
              <h2 className="text-[#121212] text-[20px] font-bold">Title here</h2>
              <p className="text-[#121212] text-[16px] mt-[10px]">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <div className="flex mt-[20px] items-center">
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-full cursor-pointer" />
                <img src={likeIcon} alt='like' className="w-[35px] cursor-pointer ml-[20px]" />
                <p className="text-[#121212] text-[16px] ml-[10px] font-bold mt-[3px]">123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;