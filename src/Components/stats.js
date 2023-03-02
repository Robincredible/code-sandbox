import Card from "./UI/card";
import ellipsis from "../Images/icon-ellipsis.svg";

import "./stats.css";

const Stats = (props) => {
  const timeframeSelected = props.selected.toLowerCase();

  const sanitizedTitle = (string) => {
    return string.replace(/\W+/g, "-").toLowerCase();
  };

  return (
    <Card className={"stats " + sanitizedTitle(props.title.toLowerCase())}>
      <div class="flex-title">
        <h1 className="stat-title">{props.title}</h1>
        <img className="ellipsis" src={ellipsis} />
      </div>
      <h2 className="stat-hours">
        {props.timeframes[timeframeSelected].current}hrs
      </h2>
      <h3 className="stat-hours-prev">
        Last Week - {props.timeframes[timeframeSelected].previous} Hours
      </h3>
    </Card>
  );
};

export default Stats;
