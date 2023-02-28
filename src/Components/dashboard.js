import "./dashboard.css";
import data from "../data.json";
import Profile from "./profile";
import Stats from "./stats";
import Period from "./period";
import { useState } from "react";

const Dashboard = (props) => {
  const [selected, setSelected] = useState("Weekly");

  // const changeHandler = (e) => {
  //   console.log("From the dashboard " + e);
  //   setSelected(e);
  // };
  return (
    <div>
      <div>
        <Profile name={props.name} />
        <Period selectTime={setSelected} />
      </div>
      <div>
        {data.map((item) => {
          return <Stats title={item.title} timeframes={item.timeframes} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
