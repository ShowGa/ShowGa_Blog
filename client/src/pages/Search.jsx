import React, { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [formTag, setFormTag] = useState("");
  const [formSort, setFormSort] = useState("Oldest");

  const handleTagSelect = (tag) => {
    setFormTag(formTag === tag ? null : tag);
  };
  const handleFormSelect = (event) => {
    setFormSort(event.target.value);
  };
  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

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
            <input type="text" onChange={handleSearchTerm} />
          </div>

          <div className="p-search_form_tag">
            <label>Categories :</label>
            <div className="p-tag_span_container">
              {tagInfo.map((info) => {
                return (
                  <span
                    key={info.tagName}
                    onClick={() => {
                      handleTagSelect(info.tagName);
                    }}
                    className={`p-span_item ${info.bgColor} ${
                      formTag === info.tagName ? `scale-75` : ""
                    }`}
                  >
                    {info.tagName}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="p-search_form_sort">
            <label>Sort :</label>
            <select onChange={handleFormSelect}>
              <option value="Oldest">Oldest</option>
              <option value="Latest">Latest</option>
              <option value="Popular">Most popular</option>
              <option value="Feature">Feature by ShowGa</option>
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
              <div className="selected_tag_container">
                {formTag && <span>{formTag}</span>}
                {formSort && <span>{formSort}</span>}
              </div>
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
