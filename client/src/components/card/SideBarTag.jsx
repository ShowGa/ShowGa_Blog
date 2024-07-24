import React from "react";

const SideBarTag = (props) => {
  return (
    <div className={`c-sideBarTag_container ${props.bgColor}`}>
      <p>{props.tagName}</p>
    </div>
  );
};

export default SideBarTag;
