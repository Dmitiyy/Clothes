import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";

import { ICostume } from "../components/ClothesCard";
import { Clothes } from "../components/Clothes";
import { HomeFilters } from "../components/HomeFilters";
import { AppDispatch, useAppSelector } from "../redux";
import { setCostumesData } from "../redux/costumesReducer";
import Man from '../images/man.png';

const fetchCostumes = async (
  page: number = 1, limit: number = 6, filterValue: string = ''
): Promise<ICostume[]> => {
  const url: string = `http://localhost:3000/costumes/all`;
  const response: AxiosResponse = await axios.get(url, {params: {page, limit, filterValue}});
  return response.data;
};

const HomePage: FC = () => {
  const { 
    data: clothesData, page, filterValue, isFilter, isNextBtn
  } = useAppSelector(state => state.costumes);

  const { data, isError, isLoading, isFetchedAfterMount } = useQuery<ICostume[], Error>(
    ['costumes', [page, filterValue]], () => fetchCostumes(page, 6, filterValue), 
    {keepPreviousData: false}
  );
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    const controller = new AbortController();

    if (data && isFetchedAfterMount) {
      if (isFilter) {
        dispatch(setCostumesData({data: data, name: 'data'}));
        dispatch(setCostumesData({data: false, name: 'isFilter'}));
      } else {
        dispatch(setCostumesData({
          data: (clothesData ? [...clothesData] : []).concat([...data]), 
          name: 'data'
        }));
      }
      if (data.length === 0) {dispatch(setCostumesData({data: false, name: 'isNextBtn'}))};
    }

    return () => controller.abort();
  }, [data, isFetchedAfterMount]);

  useEffect(() => {
    dispatch(setCostumesData({data: isLoading, name: 'isLoading'}));
  }, [isLoading]);

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header-text">
          <h1>Generate your own style</h1>
          <p>Are you preparing for a party? We can help you find the right clothes for the event</p>
          <Link to='/home/generate'>Start</Link>
        </div>
        <img src={Man} alt="man" />
      </div>
      <HomeFilters />
      <Clothes value={clothesData} loading={isLoading} error={isError} />
      {
        isNextBtn && (
          <div className="home__next">
            <button className="home__next-btn" disabled={isError || isLoading}
            onClick={() => {
              dispatch(setCostumesData({data: page + 1, name: 'page'}))
            }}>
              Next
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10L7.47076 1.93644C7.86175 1.4492 8.59881 1.43577 9.0073 1.90845L16 10" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )
      }
    </div>
  )
};

export default HomePage;