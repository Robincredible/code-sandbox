import Card from "./UI/card";

const Stats = (props) => {
  return (
    <Card>
      <h1>{props.title}</h1>
      <h2>{props.timeframes.weekly.current}</h2>
      <h3>Last Week - {props.timeframes.weekly.previous} Hours</h3>
    </Card>
  );
};

export default Stats;
