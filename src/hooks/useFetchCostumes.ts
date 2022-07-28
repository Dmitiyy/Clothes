import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ICostume } from "../components/ClothesCard";

export const useFetchCostumes = (page: number, filterValue: string) => {
  const [data, setData] = useState<ICostume[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
 
  const fetchCostumes = async (
    page: number = 1, limit: number = 6, filterValue: string = ''
  ): Promise<ICostume[]> => {
    try {
      const url: string = `http://localhost:3000/costumes/all`;
      const response: AxiosResponse = await axios.get(url, {params: {page, limit, filterValue}});
      setData(response.data);
    } catch (err) {setIsError(true); setIsLoading(false)};
    return data;
  };

  return { data, isError, isLoading, fetchCostumes };
}