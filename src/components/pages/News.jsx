import React from "react";
import "./News.scss";
import SectionTitle from "../SectionTitle";
import { NewsItems } from "../NewsItems";

const News = () => {
  return (
    <>
      <SectionTitle sectionName="Yangiliklar" />
      <div className="news-content">
        {NewsItems.map((item, index) => {
          return (
            <div className="info" key={index}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
