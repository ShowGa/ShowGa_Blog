import React, { useEffect, useState } from "react";
// i18next
import { useTranslation } from "react-i18next";
// components
import RecommendSideBar from "../components/section/RecommendSideBar";
import CommentCard from "../components/card/CommentCard";
// images
import { gao, slamDunk, slamDunk2 } from "../assets";
// CSS
import "./pages.css";
// react icons
import { PiHandsClapping } from "react-icons/pi";
import { FaRegComment, FaWindowClose } from "react-icons/fa";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
import { Link, useParams } from "react-router-dom";
import PostService from "../services/post-service";
import toast from "react-hot-toast";

const Post = () => {
  const params = useParams();

  const { authUser } = useAuthUserStore();

  const [showCommentSec, setShowCommentSec] = useState(false);
  const [post, setpost] = useState(null);

  const handleGetPost = () => {
    PostService.getPost(params.postId)
      .then((res) => {
        setpost(res.data.foundPost);
      })
      .catch((e) => {
        toast.success("Error occurred when getting article");
        console.log(e);
      });
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <div className="max-w-[80%] mx-auto max-md:max-w-[95%]">
      {/* Hero section */}
      <section>
        <div className="p-post_page_heroSection_container">
          <div className="p-post_title_container">
            <h1>{post && post.title}</h1>
            <div className="p-author_container">
              <img src={gao} />
              <div className="p-author_text">
                <p>ShowGa Hsiao</p>
                <span>{post && post.createdAt}</span>
              </div>
            </div>

            <div className="p-post_title_function-list">
              <div className="p-function_clap_container">
                <PiHandsClapping className="text-xl" />
                <p>6969</p>
              </div>

              <div
                className="p-function_comments_container"
                onClick={() => {
                  setShowCommentSec(!showCommentSec);
                }}
              >
                <FaRegComment className="text-xl" />
                <p>50</p>
              </div>
            </div>
          </div>

          <div className="p-post_img_container">
            <img src={post && post.banerImg} />
          </div>
        </div>
      </section>

      <section
        className={`p-post_comments_section ${
          showCommentSec ? "p-comments_section-effect" : ""
        }`}
        onClick={() => {
          setShowCommentSec(!showCommentSec);
        }}
      >
        <div
          className="p-post_comments_container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="p-row_flex_between">
            <p className="text-xl font-bold">Comments</p>
            <FaWindowClose
              onClick={() => {
                setShowCommentSec(!showCommentSec);
              }}
              className="text-2xl cursor-pointer"
            />
          </div>

          <div className="p-textarea_container">
            {authUser ? (
              <textarea name="" id=""></textarea>
            ) : (
              <div>
                <p>
                  <Link to={"/login"} className="link">
                    Login
                  </Link>{" "}
                  to leave comments !
                </p>
              </div>
            )}
          </div>

          <div>
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </section>

      {/* Post and Sidebar section */}
      <section className="p-post-sidebarSec">
        <div className="p-post-sidebarSec_container">
          <div className="p-article_container">
            <div
              className="p-post"
              dangerouslySetInnerHTML={{ __html: post && post.content }}
            ></div>
          </div>

          <aside className="max-lg:hidden">
            <RecommendSideBar />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Post;
