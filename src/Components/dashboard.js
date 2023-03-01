import "./dashboard.css";
import data from "../data.json";
import timeframesData from "../timeframes.json";
import Profile from "./profile";
import Stats from "./stats";
import Period from "./period";
import { useState } from "react";

const Dashboard = (props) => {
  const [selected, setSelected] = useState("Weekly");
  const timeframes = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="flex-display">
      <div className="profile-container">
        <Profile name={props.name} />
        <Period
          timeframes={timeframes}
          selectTime={setSelected}
          selected={selected}
        />
      </div>
      <div className="stats-container grid">
        {data.map((item) => {
          return (
            <Stats
              title={item.title}
              timeframes={item.timeframes}
              selected={selected}
              key={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
