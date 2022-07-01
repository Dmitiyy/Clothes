import { FC } from "react";
import { ClothesCard, ICostume } from "./ClothesCard";

export const Clothes: FC<{value: ICostume[]}> = ({ value }) => {
  return (
    <div className="home__cards-wrap">
      {
        value?.map((item, index) => (<ClothesCard likes={item.likes} key={item._id} />))
      }
    </div>
  )
}