import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux";
import { setCostumesData } from "../redux/costumesReducer";

export const HomeFilters: FC = () => {
  // const [popularValue, setPopularValue] = useState<string>('');
  // const { data, mutate, isLoading, isSuccess } = useMutation(
  //   () => {
  //     return axios.post('http://localhost:3000/costumes/popular', {value: popularValue});
  //   }
  // );
  const { filterValue } = useAppSelector(state => state.costumes);
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   if (popularValue.length !== 0) {mutate()};
  // }, [popularValue]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setCostumesData({ data: data.data, name: 'data' }));
  //   }
  // }, [data]);

  return (
    <div className="home__filters">
      <button onClick={() => {
        dispatch(setCostumesData({ 
          data: filterValue === '' || filterValue === 'asc' ? 'desc' : 'asc', 
          name: 'filterValue'
        }));
        dispatch(setCostumesData({data: 1, name: 'page'}));
      }}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" 
        xmlns="http://www.w3.org/2000/svg" style={{
          transform: `rotate(${filterValue === 'desc' ? 0 : 180}deg)`
        }}>
          <path d="M1 10L7.47076 1.93644C7.86175 1.4492 8.59881 1.43577 9.0073 1.90845L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Popular
      </button>
    </div>
  )
}