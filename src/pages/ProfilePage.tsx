import { isNull } from "lodash";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BorderCard } from "../components/BorderCard";
import { Clothes } from "../components/Clothes";
import { useAppSelector } from "../redux";

const ProfilePage: FC = () => {
  const { data } = useAppSelector(state => state.user);
  const navigate = useNavigate();

  const returnField = (field: string) => !data ? 'Loading...' : field;
  
  useEffect(() => {
    if (isNull(data) || Object.keys(data).length === 0) {navigate('/home/login')};
  }, [data]);

  return (
    <div className="profile">
      <div className="profile__border-cards">
        <BorderCard title="Hello" description="You are on the profile page" emoji="👋" />
        <BorderCard emoji="⚙️" title={returnField(data.name!)} description={returnField(data.email!)} />
      </div>
      <div className="profile__liked">
        <h2>Saved</h2>
        {
          data.saved && data.saved!.length !== 0 ? (
            <Clothes value={data.saved!} loading={!data.saved} error={!data} />
          ) : (
            <div className="message">
              <p>You don't have any saved suit</p>
              <p>Please like a suit</p>
              <span>😟</span>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default ProfilePage;