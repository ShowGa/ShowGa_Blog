import React from "react";
// i18next
import { useTranslation } from "react-i18next";
// components
import RecommendSideBar from "../components/section/RecommendSideBar";
import PostCard from "../components/card/PostCard";
// constants
import { tagInfo } from "../constants";
// CSS
import "./pages.css";

const Search = () => {
  return (
    <div className="max-w-[80%] mx-auto max-md:max-w-[95%]">
      {/* Hero section */}
      <section>
        <div className="p-heroSec_intro_head_container">
          <h1>Explore what you interest</h1>

          <p>Search by Search Term, Category and Sorting</p>
        </div>
      </section>

      <section>
        <div className="p-search_section_container">
          <h1>Searching :</h1>
        </div>

        <form className="p-search_section_system_form">
          <div className="p-search_form_Term">
            <label>Search Term :</label>
            <input type="text" />
          </div>

          <div className="p-search_form_tag">
            <label>Categories :</label>
            <div className="p-tag_span_container">
              {tagInfo.map((info) => {
                return (
                  <span className={`p-span_item ${info.bgColor}`}>
                    {info.tagName}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="p-search_form_sort">
            <label>Sort :</label>
            <select id="">
              <option value="">Oldest</option>
              <option value="">Latest</option>
              <option value="">Most popular</option>
              <option value="">Feature by ShowGa</option>
            </select>
          </div>

          <button className="p-search_button">Search</button>
        </form>
      </section>

      {/* Post and Sidebar section */}
      <section className="p-post-sidebarSec">
        <div className="p-post-sidebarSec_container">
          <main>
            <div className="p-post_searchResult_title_container">
              <h1 className="font-bold text-2xl">Search Result :</h1>
              <div className="search_tag_container">tag</div>
            </div>

            <div className="p-post-main_postcards_container">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </main>

          <aside className="max-lg:hidden">
            <RecommendSideBar />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Search;
