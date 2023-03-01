import Card from "./UI/card";
import "./stats.css";

const Stats = (props) => {
  const timeframeSelected = props.selected.toLowerCase();
  const timeframes = props.timeframes;

  return (
    <Card>
      <h1>{props.title}</h1>
      <h2>{props.timeframes[timeframeSelected].current}</h2>
      <h3>Last Week - {props.timeframes[timeframeSelected].previous} Hours</h3>
    </Card>
  );
};

export default Stats;
