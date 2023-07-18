import React from "react";
import heatArena from "../images/heat-arena.jpg";

const Main = () => {
  return (
    <div className="main-img-div">
      <img src={heatArena} id="main-img" alt={"heat-arena"} role="image" />
    </div>
  );
};

export default Main;
