import React from "react";

const Tag = (props) => {
  return (
    <div className={`c-tag_container bg-opacity-80 dic ${props.bgColor}`}>
      <div className="w-[35px]">
        <img src={props.tagImg} alt={props.tagName} />
      </div>

      <p className="c-tag_text-color">{props.tagName}</p>
    </div>
  );
};

export default Tag;
