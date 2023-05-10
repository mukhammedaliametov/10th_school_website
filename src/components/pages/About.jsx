import React from "react";
import "./About.scss";
import SectionTitle from "../SectionTitle";
import AboutImg from "../../assets/about-page-img.jpg";
import AboutImg2 from "../../assets/about-page-img2.jpg";

const About = () => {
  return (
    <div className="about">
      <SectionTitle sectionName="Biz Haqqimizda" />
      <div className="first-about">
        <img src={AboutImg} alt="" />
        <div className="about-title">
          <span>
            <i class="fa-solid fa-chevron-right"></i>{" "}
            <b>Talim moassasasining turi:</b> Umumiy ta`lim muassasasi
          </span>
          <br />
          <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i> <b>Tashkily tizim:</b>{" "}
            Tarkibi bo`linma
          </span>
          <br /> <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i> <b>Mulkchilik shakli:</b>{" "}
            Davlat mulki
          </span>
          <br />
          <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i> <b>Aholi punkti:</b>{" "}
            To`rtko`l tumani Qaraqalpog`iston Respublikasi, O`zbekiston
          </span>
          <br />
          <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i> <b>Hududiy boysinish:</b>{" "}
            To`rtko`l tumani (Qaraqalpog`iston Respublikasi)
          </span>
          <br />
          <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i>{" "}
            <b>Boshqaruvchi tashkilot:</b> ⱩⱩР ХТВ / МНО РⱩⱩ{" "}
          </span>
          <br />
          <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i>{" "}
            <b>Ishlaydigan o`qituvchilar soni:</b> 78
          </span>
          <br />
          <br />
          <span>
            <i class="fa-solid fa-chevron-right"></i> <b>O`quvchilar soni:</b>{" "}
            1004
          </span>
          <br />
        </div>
      </div>
      <div className="second-about">
        <div className="about-title2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, magnam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repellat!
          </p>
        </div>
        <img src={AboutImg2} alt="" />
      </div>
    </div>
  );
};

export default About;
