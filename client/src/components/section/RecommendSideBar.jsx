import React, { useEffect } from "react";
// Components
import SideBarPostCard from "../card/SideBarPostCard";
import SideBarTag from "../card/SideBarTag";
// Constants
import { tagInfo } from "../../constants";
// zustand
import useSidebarPostStore from "../../zustand/useSidebarPost";
// Post-service
import PostService from "../../services/post-service";
// react hot toast
import toast from "react-hot-toast";

const RecommendSideBar = () => {
  const { trendyPost, FeaturedPost, setTrendyPost, setFeaturedPost } =
    useSidebarPostStore();

  const handleTrendyPost = () => {
    PostService.getSidebarPost("sort=views")
      .then((res) => {
        setTrendyPost(res.data.foundPost);
      })
      .catch((e) => {
        toast.error("Error occurred when trying to get Trendy article !");
        console.log(e);
      });
  };
  const handleFeaturedPost = () => {
    PostService.getSidebarPost("isFeatured=true")
      .then((res) => {
        setFeaturedPost(res.data.foundPost);
      })
      .catch((e) => {
        toast.error("Error occurred when trying to get Featured article !");
        console.log(e);
      });
  };

  useEffect(() => {
    if (trendyPost === null && FeaturedPost === null) {
      handleTrendyPost();

      handleFeaturedPost();
    }
  }, []);

  return (
    <div className="c-recommendSideBar_wrapper">
      <div className="c-recommendSideBar_topic_container">
        <div className="c-recommendSideBar_text_container">
          <p>See the trendy post</p>
          <h1>Most Popular</h1>
        </div>

        <div className="c-recommendSideBar_post-container">
          {trendyPost &&
            trendyPost.map((post) => {
              return <SideBarPostCard postData={post} />;
            })}
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
          {FeaturedPost &&
            FeaturedPost.map((post) => {
              return <SideBarPostCard postData={post} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default RecommendSideBar;
