import React, { useEffect, useState } from "react";
// i18next
import { useTranslation } from "react-i18next";
// components
import RecommendSideBar from "../components/section/RecommendSideBar";
import CommentCard from "../components/card/CommentCard";
// CSS
import "./pages.css";
// react icons
import { PiHandsClapping } from "react-icons/pi";
import { FaRegComment, FaWindowClose } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";
import { Link, useParams } from "react-router-dom";
import PostService from "../services/post-service";
// react hot toast
import toast from "react-hot-toast";
// utils
import { changeTimeZone } from "../utils/timezone";
// Service
import CommentService from "../services/comment-service";

const Post = () => {
  const params = useParams();

  const { authUser } = useAuthUserStore();

  const [showCommentSec, setShowCommentSec] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
    belongUserID: authUser && authUser._id,
    belongPostID: null,
  });
  const [post, setpost] = useState(null);
  const [commentNum, setCommentNum] = useState(null);
  const [comments, setComments] = useState(null);
  const [isEnd, setIsEnd] = useState(false);

  const handleGetPost = () => {
    PostService.getPost(params.postId)
      .then((res) => {
        setpost(res.data.foundPost);
        setFormData({ ...formData, belongPostID: res.data.foundPost._id });
        setCommentNum(res.data.postComments);
      })
      .catch((e) => {
        toast.success("Error occurred when getting article");
        console.log(e);
      });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (formData.content === "") {
      toast.error("Please type some comments !");
      return;
    }

    CommentService.createComment(formData)
      .then((res) => {
        toast.success(res.data.message);
        setFormData({ ...formData, content: "" });
      })
      .catch((e) => {
        toast.error("Error occurred when trying to create comment !");
        console.log(e);
      });
  };

  // for first time click comment button
  const handleGetComments = () => {
    // click comment button check
    if (comments) {
      return;
    }

    CommentService.getPostComments(post._id, "")
      .then((res) => {
        setComments(res.data.foundComments);
        setIsEnd(res.data.isEnd);
      })
      .catch((e) => {
        toast.success("Error occurred when getting comment !");
        console.log(e);
      });
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    handleGetPost();
  }, [params.postId]);

  return (
    <div className="max-w-[80%] mx-auto max-md:max-w-[95%]">
      {/* Hero section */}
      {post && (
        <>
          <section>
            <div className="p-post_page_heroSection_container">
              <div className="p-post_title_container">
                <h1>{post.title}</h1>
                <div className="p-author_container">
                  <img src={post.belongAuthorID.avatar} />
                  <div className="p-author_text">
                    <p>{post.belongAuthorID.username}</p>
                    <span>{changeTimeZone(post.createdAt)}</span>
                  </div>
                </div>

                <div className="p-post_title_function-list">
                  <div className="p-function_clap_container">
                    <PiHandsClapping className="text-xl" />
                    <p>{post.numOfLikes}</p>
                  </div>

                  <div
                    className="p-function_comments_container"
                    onClick={() => {
                      setShowCommentSec(!showCommentSec);
                      handleGetComments();
                    }}
                  >
                    <FaRegComment className="text-xl" />
                    <p>{commentNum}</p>
                  </div>

                  <div className="p-function_clap_container">
                    <FaEye className="text-xl" />
                    <p>{post.views}</p>
                  </div>
                </div>
              </div>

              <div className="p-post_img_container">
                <img src={post.banerImg} />
              </div>
            </div>
          </section>

          {/* comments section */}
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
                <form onSubmit={handleSubmitComment}>
                  {authUser ? (
                    <>
                      <textarea
                        onChange={handleOnChange}
                        value={formData.content}
                        id="content"
                      ></textarea>
                      <button type="submit">Comment</button>
                    </>
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
                </form>
              </div>

              <div>
                {comments &&
                  comments.map((comment) => {
                    return <CommentCard key={comment._id} comment={comment} />;
                  })}
              </div>
            </div>
          </section>

          {/* Post and Sidebar section */}
          <section className="p-post-sidebarSec">
            <div className="p-post-sidebarSec_container">
              <div className="p-article_container">
                <div
                  className="p-post"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>

              <aside className="max-lg:hidden">
                <RecommendSideBar />
              </aside>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Post;
