import React, { useState } from "react";
// css
import "../components.css";
// components
import PostCard from "../card/PostCard";

const DashPosts = () => {
  const [post, setPost] = useState(null);

  return (
    <main className="max-w-[80%] mx-auto max-md:max-w-[95%] mt-12">
      <section>
        <form className="c-dash-search_form">
          <label>Search Term :</label>
          <input id="searchTerm" type="text" />
        </form>
      </section>
      <section>{post && <PostCard key={post._id} post={post} />}</section>
    </main>
  );
};

export default DashPosts;
