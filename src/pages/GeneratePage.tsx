import { FC, useCallback, useState } from "react";
import { GenerateButton } from "../components/GenerateButton";

const GeneratePage: FC = () => {
  const [activeOption, setActiveOption] = useState<number>(0);

  const handleActiveOption = useCallback((index: number) => {
    setActiveOption(index);
  }, []);

  return (
    <div className="generate">
      <h2>Generate clothes</h2>
      <hr />
      <h3>Step 1: <span>Select your gender</span></h3>
      <div className="generate__options">
        {
          [0, 1, 2, 3].map((item, index) => (
            <GenerateButton 
              checkbox={true} key={item} 
              activeOption={() => handleActiveOption(index)} 
              activeClass={index === activeOption ? true : false} 
            />
          ))
        }
      </div>
      <hr />
      <div className="generate-next__wrap">
        <button className="generate-prev">
          <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
          </svg>
        </button>
        <button className="generate-next">
          <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default GeneratePage;