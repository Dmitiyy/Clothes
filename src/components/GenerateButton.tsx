import { FC, useState } from "react";

interface IButton {
  checkbox: boolean;
  activeOption: () => void;
  activeClass?: boolean;
}

export const GenerateButton: FC<IButton> = ({checkbox, activeOption, activeClass}) => {
  const [active, setActive] = useState<boolean>(false);
  const [firstOpen, setFirstOpen] = useState<boolean>(false);

  return (
    <button className={
      checkbox && active || !checkbox && activeClass && firstOpen ? 
      "generate__options-active" : ""
    } 
    onClick={() => {
      if (!checkbox) {activeOption()};
      setActive(prev => !prev);
      setFirstOpen(true);
    }}>
      {
        checkbox && (
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7234 0.459333C21.3574 0.0920063 20.7573 0.0920063 20.3913 0.459333L9.31098 11.537L3.60464 5.79162C3.23866 5.42295 2.6426 5.42295 2.27393 5.79162L0.274486 7.78971C-0.0914952 8.15435 -0.0914952 8.75445 0.274486 9.12178L8.63957 17.542C9.00555 17.9067 9.60161 17.9067 9.97163 17.542L23.7215 3.79083C24.0928 3.42351 24.0928 2.82206 23.7215 2.45339L21.7234 0.459333Z" fill="white"/>
          </svg>
        )
      }
      <p style={{marginLeft: checkbox ? '-30px' : '0px'}}>Checkbox</p>
    </button>
  )
}