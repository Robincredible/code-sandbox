import "./profile.css";
import Card from "./UI/card";

const Profile = (props) => {
  return (
    <div>
      <Card className="profile">
        <p>Report for</p>
        <h1>{props.name || "Jeremy Robson"}</h1>
      </Card>
    </div>
  );
};

export default Profile;
