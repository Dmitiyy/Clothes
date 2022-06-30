import { FC, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { ICostume } from "../components/ClothesCard";
import { Clothes } from "../components/Clothes";
import Man from '../images/man.png';

const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useQuery<ICostume[], Error>(
    ['costumes', page], () => fetchCostumes(page), {keepPreviousData: true}
  );

  const fetchCostumes = async (page: number = 1, limit: number = 6): Promise<ICostume[]> => {
    const url: string = `http://localhost:3000/costumes/all?page=${page}&limit=${limit}`;
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  };

  const cachedClothes = useMemo(() => {
    if (isLoading || isError) return [];
    return data;
  }, [isLoading, isError, data]);

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
      <div className="home__filters">
        <button>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L7.47076 1.93644C7.86175 1.4492 8.59881 1.43577 9.0073 1.90845L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Popular
        </button>
      </div>
      <Clothes value={cachedClothes!} />
      <div className="home__next">
        <button className="home__next-btn" onClick={() => setPage(prev => prev + 1)}>
          Next
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L7.47076 1.93644C7.86175 1.4492 8.59881 1.43577 9.0073 1.90845L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
};

export default HomePage;