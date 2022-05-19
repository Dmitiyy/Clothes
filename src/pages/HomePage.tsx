import { FC } from "react"

const HomePage: FC = () => {
  const columnTitle = `ml-[25px] text-blue-main text-xl mb-[10px] 
  group-hover:text-[#fff] ease-in-out duration-200 font-medium`;
  const column = `w-[270px] h-[700px] rounded-[40px] border-4 border-blue-main
  group-hover:border-[#fff] ease-in-out duration-200`;

  return (
    <div className="w-[1000px] h-[100vh] m-auto pt-[30px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#fff] font-bold text-center text-3xl">Inspiration Board</h1>
        <div className="flex items-center">
          <p className="text-[#fff] mr-[15px] text-base">Dmitry Pieshkov</p>
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-full" />
        </div>
      </div>
      <div className="w-[100%] bg-grey-main rounded-[40px]">
        <div className="flex justify-between mt-[50px] p-10">
          <div className="group">
            <h2 className={`${columnTitle}`}>Terrible Ideas</h2>
            <div className={`${column}`}>
              <div className="w-[100%] h-[150px] bg-[#222831] rounded-t-[35px]"></div>
            </div>
          </div>
          <div className="group">
            <h2 className={`${columnTitle}`}>Good Ideas</h2>
            <div className={`${column}`}></div>
          </div>
          <div className="group">
            <h2 className={`${columnTitle}`}>Incredible Ideas</h2>
            <div className={`${column}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;