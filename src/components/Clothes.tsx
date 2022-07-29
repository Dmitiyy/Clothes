import { FC, memo, useEffect } from "react";
import { ClothesCard, ICostume } from "./ClothesCard";
import { uniqBy } from 'lodash';
import ContentLoader from "react-content-loader";
import { AppDispatch, useAppSelector } from "../redux";
import { useDispatch } from "react-redux";
import { setCostumesData } from "../redux/costumesReducer";
import { IUser } from "../redux/userReducer";

export const handleActive = (property: string, item: ICostume, user: IUser): boolean => {
  const dataProperty = user[property as keyof IUser] as ICostume[];
  return dataProperty.some(elem => elem._id === item._id) ? true : false;
}

export const Clothes: FC<{
  value: ICostume[], loading: boolean, error: boolean
}> = memo(({ value, loading, error }) => {
  const { data } = useAppSelector(state => state.user);
  const { isFirstRender } = useAppSelector(state => state.costumes);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!loading) {dispatch(setCostumesData({data: false, name: 'isFirstRender'}))};
  }, [loading]);


  if (error) {
    return (
      <div className="home__cards-error">
        <h2>😟 Error</h2>
        <p>Try again later</p>
      </div>
    )
  }

  return (
    <div className="home__cards-wrap">
      {
        loading && isFirstRender ? (
          Array(6).fill(1).map((_, index) => {
            return (
              <ContentLoader 
                speed={1}
                width={223}
                height={348}
                viewBox="0 0 223 348"
                backgroundColor="#444"
                foregroundColor="#333333"
                key={index}
              >
                <rect x="0" y="0" rx="24" ry="24" width="223" height="348" />
              </ContentLoader>
            )
          })
        ) : 
        uniqBy(value, '_id').map((item) => (
          <ClothesCard 
            value={item!} key={item._id} 
            isLike={handleActive('liked', item, data)} 
            isSaved={handleActive('saved', item, data)} 
          />
        ))
      }
    </div>
  )
});