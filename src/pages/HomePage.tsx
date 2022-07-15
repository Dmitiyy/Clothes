import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { ICostume } from "../components/ClothesCard";
import { Clothes } from "../components/Clothes";
import Man from '../images/man.png';
import { HomeFilters } from "../components/HomeFilters";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux";
import { setCostumesData } from "../redux/costumesReducer";

const fetchCostumes = async (page: number = 1, limit: number = 6): Promise<ICostume[]> => {
  const url: string = `http://localhost:3000/costumes/all?page=${page}&limit=${limit}`;
  const response: AxiosResponse = await axios.get(url);
  return response.data;
};

const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useQuery<ICostume[], Error>(
    ['costumes', page], () => fetchCostumes(page)
  );
  
  const dispatch = useDispatch<AppDispatch>();
  const { data: clothesData } = useAppSelector(state => state.costumes);
  const [isShowNext, setIsShowNext] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
      dispatch(setCostumesData({ data: (clothesData ? [...clothesData] : []).concat(data) }));
      if (data.length === 0) {setIsShowNext(false)};
    };
  }, [data]);

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
        isShowNext && (
          <div className="home__next">
            <button className="home__next-btn" disabled={isError || isLoading}
            onClick={() => {setPage(prev => prev + 1)}}>
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