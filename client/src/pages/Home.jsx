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
import { me1, me2, me3 } from "../assets";

const Home = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
  const { t } = useTranslation();

  return (
    <div className="w-[80%] mx-auto">
      {/* Hero section */}
      <section className="flex flex-col">
        <div className="flex flex-col gap-2 py-11">
          <h1 className="text-5xl font-extrabold">
            Hi,
            <br /> ShowGa here
          </h1>

          <p className="text-xl">
            I'm a software engineering learner from Taiwan . This blog was hand
            on crafted by thousands line of code , to recode my life with
            articles and pictures .
          </p>
        </div>

        <div className="flex items-center justify-evenly gap-8">
          <Swiper
            className="w-[320px] m-0 flex-shrink-0"
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            effect={"fade"}
            fadeEffect={{ window: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="h-[400px] overflow-hidden">
                <img
                  src={me1}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[400px] overflow-hidden">
                <img
                  src={me2}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="h-[400px] overflow-hidden">
                <img
                  src={me3}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SwiperSlide> */}
          </Swiper>

          <div className="flex flex-col gap-4 max-w-[600px]">
            <h1 className="text-3xl font-extrabold">ShowGa 簡介</h1>

            <p className="w-full">
              I'm a software engineering learner from Taiwan . This blog was
              hand on crafted line by line of thousands of code , to recode my
              life with articles and pictures .
            </p>
          </div>
        </div>
      </section>

      {/* Tag section */}
      <section>
        <h1>Categories</h1>
        <div className="flex justify-evenly bg-blue-200">
          <Tag />
          <Tag />
        </div>
      </section>

      {/* Post and Sidebar section */}
      <section>
        <h1>Recent Posts</h1>
        <div className="">
          <main className="bg-red-400">
            <PostCard />
          </main>

          <aside className="w-52">
            <RecommendSideBar />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Home;

/*
======================
To-Do-List
======================
1. Create main part component
2. Create Post Card component
3.

*/
