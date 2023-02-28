import "./dashboard.css";
import data from "../data.json";
import Profile from "./profile";
import Stats from "./stats";
import Period from "./period";
import { useState } from "react";

const Dashboard = (props) => {
  const [selected, setSelected] = useState([]);
  console.log("From the dashboard " + selected);

  return (
    <div>
      <div>
        <Profile name={props.name} />
        <Period onChange={changeHandler} selectTime={setSelected} />
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
