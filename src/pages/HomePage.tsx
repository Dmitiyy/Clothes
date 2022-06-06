import { FC } from "react";
import Man from '../images/man.png';

const HomePage: FC = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header-text">
          <h1>Generate your own style</h1>
          <p>Are you preparing for a party? We can help you find the right clothes for the event</p>
          <button>Start</button>
        </div>
        <img src={Man} alt="man" />
      </div>
      <div className="home__filters">
        <button>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L7.47076 1.93644C7.86175 1.4492 8.59881 1.43577 9.0073 1.90845L16 10" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
          </svg>
          Popular
        </button>
      </div>
    </div>
  )
}

export default HomePage;