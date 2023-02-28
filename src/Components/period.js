import Card from "./UI/card";
import { useState } from "react";

const Period = (props) => {
  const [selected, setSelected] = useState("Weekly");

  const clickHandler = (e) => {
    setSelected(e.target.textContent);
    props.selectTime(selected);

    console.log(selected);

    if (e.currentTarget.id != selected) {
      e.currentTarget.classList += "";
    } else if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList += "";
    } else {
      e.currentTarget.classList += "active";
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
