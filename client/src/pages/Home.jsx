import React from "react";
// i18next
import { useTranslation } from "react-i18next";
// components
import RecommendSideBar from "../components/section/RecommendSideBar";
import Tag from "../components/card/Tag";
import PostCard from "../components/card/PostCard";
// swiper
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// images
import { me1, me2 } from "../assets";
import { tagInfo } from "../constants";
// CSS
import "./pages.css";

const Home = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
  const { t } = useTranslation();

  return (
    <div className="w-[80%] mx-auto">
      {/* Hero section */}
      <section>
        <div className="p-heroSec_intro_head_container">
          <h1>
            Hi,
            <br /> ShowGa here
          </h1>

          <p>
            I'm a software engineering learner from Taiwan . This blog was hand
            on crafted by thousands line of code , to recode my life with
            articles and pictures .
          </p>
        </div>

        <div className="p-heroSec_intro_body_container">
          <Swiper
            className="p-heroSec_swiper"
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            effect={"fade"}
            fadeEffect={{ window: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="h-[400px]">
                <img src={me1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[400px]">
                <img src={me2} />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="p-heroSec_intro_body_text_container">
            <h1 className="">ShowGa 簡介</h1>

            <p>
              I'm a software engineering learner from Taiwan . This blog was
              hand on crafted line by line of thousands of code , to recode my
              life with articles and pictures .
            </p>
          </div>
        </div>
      </section>

      {/* Tag section */}
      <section className="p-tagSec">
        <h1>Categories</h1>
        <div className="p-tagSec_tags_container">
          {tagInfo.map((info) => {
            return <Tag key={info.tagName} {...info} />;
          })}
        </div>
      </section>

      {/* Post and Sidebar section */}
      <section className="p-post-sidebarSec">
        <div className="p-post-sidebarSec_container">
          <main>
            <h1 className="p-post_main_title">Recent Posts</h1>
            <div className="p-post-main_postcards_container">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </main>

          <aside>
            <RecommendSideBar />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Home;
