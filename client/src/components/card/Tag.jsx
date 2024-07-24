import React from "react";

const Tag = (props) => {
  return (
    <div className={`c-tag_container ${props.bgColor} `}>
      <div className="w-[35px]">
        <img src={props.tagImg} alt={props.tagName} />
      </div>

      <p>{props.tagName}</p>
    </div>
  );
};

export default Tag;
