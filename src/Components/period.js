import Card from "./UI/card";
import { useEffect, useState } from "react";
import "./period.css";

const Period = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [active, setActive] = useState(-1);
  const timeframes = props.timeframes;

  useEffect(() => {
    setSelected(selected);
    props.selectTime(selected);
    updateActiveElement(selected);
  }, [selected]);

  const updateActiveElement = (id) => {
    setActive(active !== id ? id : -1);
  };

  const clickHandler = (e) => {
    const value = e.currentTarget.id;
    setSelected(value);
  };

  return (
    <Card className="period">
      {timeframes.map((timeframe) => {
        return (
          <p key={timeframe} id={timeframe} onClick={clickHandler}>
            {timeframe}
          </p>
        );
      })}
    </Card>
  );
};

export default Period;
