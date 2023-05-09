import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { MenuItems } from '../MenuItems'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-title">
          <h1>To`rtko`l tumani 10-sonli maktab</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            asperiores quas obcaecati sint aliquid ad quo natus.
          </p>
          <Link to="/about">
            <i class="fa-solid fa-circle-info"></i> Biz haqqimizda
          </Link>
          <Link to="/contact">
            <i class="fa-solid fa-address-book"></i> Aloqa
          </Link>
        </div>
      </div>
      <div className="home-items">
        <div className="cards">
          {MenuItems.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-head">
                  <img src={item.img} alt="" />
                </div>
                <div className="card-body">
                  <h1>{item.title}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Incidunt, mollitia.
                  </p>
                  <a href="">See more</a>
                </div>
                <div className="card-end">
                  <span>
                    <i class="fa-solid fa-eye"></i> {item.view}
                  </span>
                  <span>❤️ {item.linkes}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
