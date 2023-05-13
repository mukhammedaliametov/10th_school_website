import React from "react";
import SectionTitle from "../SectionTitle";
import { ManagementsItems } from "../ManagementsItems";
import './Managements.scss'

const Management = () => {
  return (
    <>
      <SectionTitle sectionName="Rahbariyat" />
      <div className="cards-container">
        {ManagementsItems.map((item, index) => {
          return(
            <div className="card" key={index}>
              <img src={item.img} alt="" />
              <span className="full-name"><i class="fa-solid fa-user-tie"></i> {item.fullName}</span>
              <span className="degree"><i class="fa-solid fa-chalkboard-user"></i> {item.degree}</span>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Management;
