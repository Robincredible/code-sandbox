import Card from "./UI/card";
import { useState } from "react";

const Period = (props) => {
  const [selected, setSelected] = useState("Weekly");

  const clickHandler = (e) => {
    setSelected(e.target.textContent);
    props.selectTime(selected);

    if (e.target.id === selected) {
      e.target.className += "active ";
    } else if (e.target.className.has("active")) {
      e.currentTarget.className += "";
    } else {
      e.currentTarget.className += "";
    }
  };

  return (
    <Card className="period">
      <p id="Daily" onClick={clickHandler}>
        Daily
      </p>
      <p id="Weekly" onClick={clickHandler}>
        Weekly
      </p>
      <p id="Monthly" onClick={clickHandler}>
        Monthly
      </p>
    </Card>
  );
};

export default Period;
