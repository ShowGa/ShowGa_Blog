import React from "react";
// Images
import { steam } from "../assets";

const About = () => {
  return (
    <div>
      <section className="p-about_section_container">
        <h1>About ShowGa</h1>
        <div className="p-social-link_container">
          <a
            href="https://steamcommunity.com/profiles/76561198265945254/"
            target="_blank"
          >
            <img src={steam} />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          similique ipsam tempore libero voluptatem exercitationem assumenda
          perspiciatis corporis, natus eos neque quod atque! Incidunt, deserunt
          nesciunt ducimus necessitatibus itaque rem. <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          voluptates, sequi quae, rerum magni similique neque consequatur rem
          molestiae ea repellat ipsum modi nisi corrupti iste debitis sunt quas
          doloribus.
        </p>
      </section>
    </div>
  );
};

export default About;
