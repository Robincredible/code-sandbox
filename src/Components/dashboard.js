import { useState } from "react";

import "./dashboard.css";
import data from "../data.json";
import timeframesData from "../timeframes.json"; // created a test json so we can scale the items if needed and recieve json data from APIs
import Profile from "./profile";
import Stats from "./stats";
import Period from "./period";

const Dashboard = (props) => {
  const [selected, setSelected] = useState("Weekly");
  const timeframes = ["Daily", "Weekly", "Monthly"]; //test data

  return (
    <div className="flex-display">
      <div className="profile-container">
        <Profile name={props.name} />
        <Period
          timeframes={timeframesData}
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
