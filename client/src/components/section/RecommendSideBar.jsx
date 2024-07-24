import React from "react";
// Components
import SideBarPostCard from "../card/SideBarPostCard";
import SideBarTag from "../card/SideBarTag";
// Constants
import { tagInfo } from "../../constants";

const RecommendSideBar = () => {
  return (
    <div className="w-[300px] flex flex-col gap-11">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs">See the trendy post</p>
          <h1 className="text-2xl font-bold">Most Popular</h1>
        </div>

        <div className="flex flex-col gap-6">
          <SideBarPostCard />
          <SideBarPostCard />
          <SideBarPostCard />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs">Discovering by topic</p>
          <h1 className="text-2xl font-bold">Categories</h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {tagInfo.map((info) => {
            return <SideBarTag key={info.tagName} {...info} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs">Features</p>
          <h1 className="text-2xl font-bold">Feature posts chosen by ShowGa</h1>
        </div>

        <div className="flex flex-col gap-6">
          <SideBarPostCard />
          <SideBarPostCard />
          <SideBarPostCard />
        </div>
      </div>
    </div>
  );
};

export default RecommendSideBar;
