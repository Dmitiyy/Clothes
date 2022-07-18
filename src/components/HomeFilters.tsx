import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux";
import { launchFilter } from "../redux/costumesReducer";

export const HomeFilters: FC = () => {
  const { filterValue, isLoading } = useAppSelector(state => state.costumes);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="home__filters">
      <button onClick={() => {
        dispatch(launchFilter({
          value: filterValue === '' || filterValue === 'asc' ? 'desc' : 'asc'
        }));
      }} disabled={isLoading}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" 
        xmlns="http://www.w3.org/2000/svg" style={{
          transform: `rotate(${filterValue === 'desc' ? 0 : 180}deg)`
        }}>
          <path d="M1 10L7.47076 1.93644C7.86175 1.4492 8.59881 1.43577 9.0073 1.90845L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Popular
        {filterValue.length !== 0 && (<div className="home__filters-active" />)}
      </button>
    </div>
  )
}