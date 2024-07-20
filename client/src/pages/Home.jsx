import React from "react";
// i18next
import { useTranslation } from "react-i18next";
// components
import RecommendSideBar from "../components/section/RecommendSideBar";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="content_container">
      <section>HeroSection</section>

      <div className="content_flex">
        <main>Main</main>
        <RecommendSideBar />
      </div>
    </div>
  );
};

export default Home;
