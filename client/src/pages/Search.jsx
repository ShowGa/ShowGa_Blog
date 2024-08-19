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
// react icons
import { FaSquarePlus } from "react-icons/fa6";
// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchCondition, setSearchCondition] = useState({
    searchTerm: "",
    isFeatured: false,
    category: "",
    sort: "desc",
    order: "createdAt",
  });

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSearchCondition({ ...searchCondition, searchTerm: e.target.value });
      return;
    }

    if (e.target.id === "sort_order") {
      const sort_order = e.target.value.split("_");
      setSearchCondition({
        ...searchCondition,
        sort: sort_order[0],
        order: sort_order[1],
      });
      return;
    }

    if (e.target.id === "isFeatured") {
      setSearchCondition({
        ...searchCondition,
        isFeatured: e.target.value === "true" ? true : false,
      });
    }

    if (e.target.classList.contains("p-span_item")) {
      setSearchCondition({
        ...searchCondition,
        category:
          searchCondition.category === e.target.innerText
            ? null
            : e.target.innerText,
      });
    }
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
            <input onChange={handleChange} id="searchTerm" type="text" />
          </div>

          <div className="p-search_form_tag">
            <label>Categories :</label>
            <div className="p-tag_span_container">
              {tagInfo.map((info) => {
                return (
                  <span
                    onClick={handleChange}
                    key={info.tagName}
                    className={`p-span_item ${info.bgColor} ${
                      searchCondition.category === info.tagName
                        ? `scale-75`
                        : ""
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
            <select onChange={handleChange} id="sort_order">
              <option value="createdAt_asc">Oldest</option>
              <option value="createdAt_desc">Latest</option>
              <option value="views_desc">Most popular</option>
            </select>
          </div>

          <div className="p-search_form_featured">
            <label>Featured by Author : </label>
            <select onChange={handleChange} id="isFeatured">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <button className="p-search_button">Search</button>
        </form>
      </section>

      {/* Post and Sidebar section */}
      <section className="p-post-sidebarSec">
        <div className="p-post-sidebarSec_container">
          <main>
            <div className="p-post-main_postcards_container">
              <div>
                <FaSquarePlus className="p-load_more_button" />
              </div>
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
