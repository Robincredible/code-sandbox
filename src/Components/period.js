import { useEffect, useState } from "react";

import Card from "./UI/card";
import "./period.css";

const Period = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [active, setActive] = useState(1);
  const timeframes = props.timeframes;

  /* Show the current updated state and runs before render */
  useEffect(() => {
    setSelected(selected);
    props.selectTime(selected); //lift state up to parent component
  }, [selected]);

  const updateActiveElement = (id) => {
    setActive(active !== id ? id : selected);
  };

  const clickHandler = (e) => {
    const value = e.currentTarget.id;
    const selectedValue = e.currentTarget.getAttribute("data-text");
    setSelected(selectedValue); // choosing an item updates the state
    updateActiveElement(value); // update the state with the id of the active element
  };

  return (
    <Card className="period">
      {timeframes.map((timeframe) => {
        return (
          <p
            key={timeframe.text}
            id={timeframe.id}
            data-text={timeframe.text}
            className={active == timeframe.id ? "active" : ""}
            onClick={clickHandler}
          >
            {timeframe.text}
          </p>
        );
      })}
    </Card>
  );
};

export default Period;
