import { FC } from "react";
import { ClothesCard, ICostume } from "./ClothesCard";

export const Clothes: FC<{value: ICostume[]}> = ({ value }) => {
  return (
    <div className="home__cards-wrap">
      {
        value?.map((item, index) => (<ClothesCard key={item._id} />))
      }
    </div>
  )
}