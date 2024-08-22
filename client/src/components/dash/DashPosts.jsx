import React, { useRef, useState } from "react";
// css
import "../components.css";
// components
import PostCard from "../card/PostCard";
// service
import PostService from "../../services/post-service.js";
// hot toast
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DashPosts = () => {
  const [post, setPost] = useState(null);
  const searchData = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (searchData.current.value === "") {
      toast.error("Type some words !");
      return;
    }

    const searchQuery = `?searchTerm=${searchData.current.value}`;

    PostService.getAllPosts(searchQuery)
      .then((res) => {
        setPost(res.data.foundPost);
      })
      .catch((e) => {
        toast.error("Error occurred when searching posts !");
        console.log(e);
      });
  };

  return (
    <main className="w-[80%] mx-auto mt-12">
      <section className="w-full">
        <form onSubmit={handleSubmitForm} className="c-dash-search_form">
          <div>
            <label>Search Term :</label>
            <input id="searchTerm" type="text" ref={searchData} />
          </div>

          <button type="submit">Search</button>
        </form>
      </section>
      <section>
        {post && (
          <>
            <PostCard key={post._id} post={post[0]} />
            <Link to={`/update-editor/${post[0].slug}`}>Modify</Link>
          </>
        )}
      </section>
    </main>
  );
};

export default DashPosts;
