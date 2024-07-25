import React from "react";
// Components
import SideBarPostCard from "../card/SideBarPostCard";
import SideBarTag from "../card/SideBarTag";
// Constants
import { tagInfo } from "../../constants";

const RecommendSideBar = () => {
  return (
    <div className="c-recommendSideBar_wrapper">
      <div className="c-recommendSideBar_topic_container">
        <div className="c-recommendSideBar_text_container">
          <p>See the trendy post</p>
          <h1>Most Popular</h1>
        </div>

        <div className="c-recommendSideBar_post-container">
          <SideBarPostCard />
          <SideBarPostCard />
          <SideBarPostCard />
        </div>
      </div>

      <div className="c-recommendSideBar_topic_container">
        <div className="c-recommendSideBar_text_container">
          <p>Discovering by topic</p>
          <h1>Categories</h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {tagInfo.map((info) => {
            return <SideBarTag key={info.tagName} {...info} />;
          })}
        </div>
      </div>

      <div className="c-recommendSideBar_topic_container">
        <div className="c-recommendSideBar_text_container">
          <p>Features</p>
          <h1>Feature posts chosen by ShowGa</h1>
        </div>

        <div className="c-recommendSideBar_post-container">
          <SideBarPostCard />
          <SideBarPostCard />
          <SideBarPostCard />
        </div>
      </div>
    </div>
  );
};

export default RecommendSideBar;
