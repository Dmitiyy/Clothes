import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import ContentLoader from "react-content-loader";
import { useMutation } from "react-query";
import axios from "axios";

import { GenerateButton } from "../components/GenerateButton";
import { useAppSelector } from "../redux";
import { AppDispatch } from "../redux";
import { fetchGenerateStep, setDataDefault, TGenerateParams } from "../redux/generateReducer";
import { ICostume } from "../components/ClothesCard";
import { Clothes } from "../components/Clothes";

const GeneratePage: FC = () => {
  const [stepNum, setStepNum] = useState<number>(1);
  const { data, params, status, suitsData } = useAppSelector(state => state.generate);
  const dispatch = useDispatch<AppDispatch>();

  const getCostumes = useMutation(
    (data: TGenerateParams) => {
      return axios.get(`${process.env.REACT_APP_BACKEND}/costumes/generate`, {params: {...data}});
    },
    { onSuccess({ data }) {dispatch(setDataDefault({ini: 'suitsData', data: [...data]}))} }
  )

  const findStepData = Object.entries(data).find((item) => item[1].step === stepNum)!;
  const findParamName = Object.entries(params).find(item => item[0] === findStepData[0])!;

  const sendParams = () => {getCostumes.mutate(params)};

  const manageStep = async (plus: boolean) => {
    if (!plus) {
      dispatch(setDataDefault({ini: 'params', data: {...params, [findStepData[0]]: ''}}));
    }
    setStepNum(prev => plus ? prev + 1 : prev - 1);
    await dispatch(fetchGenerateStep({...params})).unwrap();
  }

  useEffect(() => {
    console.log(status);
    
  }, [status])

  return (
    <div className="generate">
      <h2>Generate clothes</h2>
      <hr />
      <h3>Step {stepNum}: <span>{findStepData[1].description}</span></h3>
      <motion.div className="generate__options">
        {
          status === 'loading' ? 
          [0, 1, 2, 3].map(item => {
            return (
              <ContentLoader 
                speed={2}
                width={365}
                height={50}
                viewBox="0 0 365 50"
                backgroundColor="#444"
                foregroundColor="#313131"
                key={item}
              >
                <rect x="0" y="0" rx="10" ry="10" width="365" height="50" />
              </ContentLoader>
            )
          }) :
          status === 'error' ? (<h2>Error</h2>) : 
          findStepData[1].options?.map((item) => {
            return (
              <GenerateButton 
                stepNum={stepNum}
                checkbox={stepNum === 4 ? true : false} 
                key={item} 
                title={item}
                stepName={findStepData[0]}
              />
            )
          })
        }
      </motion.div>
      <hr />
      {
        findParamName[1].length !== 0 ? (
          <motion.div className="generate-next__wrap">
            <button className="generate-prev" disabled={stepNum < 2} onClick={() => {manageStep(false)}}>
              <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
              </svg>
            </button>
            {
              stepNum === 4 ? (
                <button 
                  className="generate-response" onClick={sendParams} 
                  disabled={getCostumes.isError || getCostumes.isLoading}
                >
                  Generate
                </button>
              ) : (
                <button className="generate-next" disabled={stepNum === 4} onClick={() => {manageStep(true)}}>
                <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807611 18.9792 0.807611 18.3934 1.3934C17.8076 1.97919 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM2 13.5L29 13.5V10.5L2 10.5V13.5Z" fill="white"/>
                </svg>
              </button>
              )
            }
          </motion.div>
        ) : null 
      }
      {
        suitsData?.length !== 0 && (
          <Clothes value={suitsData} loading={getCostumes.isLoading} error={getCostumes.isError} /> 
        )
      }
    </div>
  )
}

export default GeneratePage;