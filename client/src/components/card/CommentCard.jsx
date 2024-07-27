import React from "react";
// Images
import { gao } from "../../assets";
// react icons
import { PiHandsClapping } from "react-icons/pi";

const CommentCard = () => {
  return (
    <div className="flex flex-col gap-4 border-t pt-4 mt-5">
      <div className="flex items-center gap-3">
        <img src={gao} alt="" className="w-9 rounded-full" />

        <div>
          <p>ShowGa Hsiao</p>
          <span className="text-sm leading-none">27.07.2024</span>
        </div>
      </div>

      <div>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          reiciendis, numquam odit fuga distinctio repellendus eos quibusdam
          ipsam minus possimus nobis accusantium autem aliquam vitae. Quae
          officiis rem voluptate impedit!
        </p>
      </div>

      <div>
        <div className="flex gap-1 cursor-pointer">
          <PiHandsClapping className="text-lg" />
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
