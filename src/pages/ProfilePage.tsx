import { FC } from "react";
import { BorderCard } from "../components/BorderCard";
import { Clothes } from "../components/Clothes";

const ProfilePage: FC = () => {
  return (
    <div className="profile">
      <div className="profile__border-cards">
        <BorderCard title="Hello" description="You are on the profile page" emoji="👋" />
        <BorderCard title="John Smith" description="dmitriyy311@gmail.com" emoji="⚙️" />
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