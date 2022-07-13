import React from "react";

const PlayComp = (props) => {
  return (
    <button className="bb">
      {props.logo}
      <div>
        <p className="txt2">{props.name}</p>
        <p>{props.store}</p>
      </div>
    </button>
  );
};

export default PlayComp;
