import { FC } from "react";

interface IProps {
  emoji: string;
  title: string;
  description: string;
}

export const BorderCard: FC<IProps> = ({ emoji, title, description }) => {
  return (
    <div className="border-card">
      <div className="border-card__wrap">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="border-card__circle">
        <p>{emoji}</p>
      </div>
    </div>
  )
}