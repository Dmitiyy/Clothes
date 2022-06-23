import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../redux";
import { useDispatch } from "react-redux";

import { GenerateButton } from "../components/GenerateButton";
import { AppDispatch } from "../redux";
import { fetchGenerateStep, setDataDefault } from "../redux/generateReducer";

const GeneratePage: FC = () => {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [stepNum, setStepNum] = useState<number>(1);
  const { data, params, status } = useAppSelector(state => state.generate);
  const dispatch = useDispatch<AppDispatch>();

  const handleActiveOption = ((index: number) => {setActiveOption(index)});

  useEffect(() => {
    console.log(params);
  }, [params]);

  const findStepData = () => Object.entries(data).find((item) => item[1].step === stepNum)!;
  const findParamName = () => Object.entries(params).find(item => item[0] === findStepData()[0])!;
  
  const increaseStep = async () => {
    setStepNum(prev => prev + 1);
    await dispatch(fetchGenerateStep({...params})).unwrap();
  }

  return (
    <div className="generate">
      <h2>Generate clothes</h2>
      <hr />
      <h3>Step {stepNum}: <span>{findStepData()[1].description}</span></h3>
      <div className="generate__options">
      {
        findStepData()[1].options?.map((item, index) => {
          return (
            <GenerateButton 
              stepNum={stepNum}
              checkbox={stepNum === 4 ? true : false} 
              key={item} 
              activeOption={() => handleActiveOption(index)} 
              activeClass={index === activeOption ? true : false} 
              title={item}
              stepName={findStepData()[0]}
            />
          )
        })
      }
      </div>
      <hr />
      {
        findParamName()[1].length !== 0 ? (
          <div className="generate-next__wrap">
            <button className="generate-prev" disabled={stepNum < 2}>
              <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
              </svg>
            </button>
            <button className="generate-next" onClick={increaseStep}>
              <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
              </svg>
            </button>
          </div>
        ) : null
      }
    </div>
  )
}

export default GeneratePage;