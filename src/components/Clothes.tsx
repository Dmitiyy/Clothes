import { FC, memo, useEffect, useState } from "react";
import { ClothesCard, ICostume } from "./ClothesCard";
import { uniqBy } from 'lodash';
import ContentLoader from "react-content-loader";

export const Clothes: FC<{
  value: ICostume[], loading: boolean, error: boolean
}> = memo(({ value, loading, error }) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (!loading) {setIsFirstRender(false)};
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
        uniqBy(value, '_id').map((item) => (<ClothesCard likes={item.likes} key={item._id} />))
      }
    </div>
  )
});