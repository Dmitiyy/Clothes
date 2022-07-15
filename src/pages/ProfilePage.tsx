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
    if (isNull(data)) {navigate('/home/login')}
  }, [data]);

  return (
    <div className="profile">
      <div className="profile__border-cards">
        <BorderCard title="Hello" description="You are on the profile page" emoji="👋" />
        <BorderCard 
          emoji="⚙️" title={returnField(data.name!)} description={returnField(data.email!)}  
        />
      </div>
      <div className="profile__liked">
        <h2>Liked</h2>
        <Clothes value={[
          {_id: '1', likes: 0}, 
          {_id: '2', likes: 0}, 
          {_id: '3', likes: 0}
        ]} loading={false} error={false} />
      </div>
    </div>
  )
}
export default ProfilePage;