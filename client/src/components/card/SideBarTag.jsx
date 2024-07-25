import React from "react";

const SideBarTag = (props) => {
  return (
    <div className={`c-sideBarTag_container ${props.bgColor}`}>
      <p className="c-tag_text-color">{props.tagName}</p>
    </div>
  );
};

export default SideBarTag;
