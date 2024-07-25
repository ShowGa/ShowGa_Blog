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
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
// images
import { me1, me2 } from "../assets";
import { tagInfo } from "../constants";
// CSS
import "./pages.css";

const Home = () => {
  SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);
  const { t } = useTranslation();

  return (
    <div className="max-w-[80%] mx-auto max-md:max-w-[95%]">
      {/* Hero section */}
      <section>
        <div className="p-heroSec_intro_head_container">
          <h1>
            Hi,
            <br /> ShowGa here
          </h1>

          <p>I'm a software engineering learner live in Taiwan .</p>
        </div>

        <div className="p-swiper_container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            // loop={true}
          >
            <SwiperSlide>
              <div>
                <img src={me1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={me1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={me1} />
              </div>
            </SwiperSlide>
          </Swiper>
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

          <aside className="max-lg:hidden">
            <RecommendSideBar />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Home;
