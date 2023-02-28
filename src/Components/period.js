import Card from "./UI/card";
import { useState } from "react";

const Period = (props) => {
  const [selected, setSelected] = useState("Weekly");

  const clickHandler = (e) => {
    //console.log(e.target.textContent);
    setSelected(e.target.textContent);
    props.selectTime(selected);
  };

  return (
    <Card className="period">
      <p onClick={clickHandler}>Daily</p>
      <p onClick={clickHandler}>Weekly</p>
      <p onClick={clickHandler}>Monthly</p>
    </Card>
  );
};

export default Period;
