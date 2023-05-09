import React from "react";
import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>To`rtko`l tumani 10-sonli maktab</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit asperiores quas obcaecati sint aliquid
          ad quo natus.
        </p>
        <Link to='/about'>
          <i class="fa-solid fa-circle-info"></i> Biz haqqimizda
        </Link>
        <Link to='/contact'>
          <i class="fa-solid fa-address-book"></i> Aloqa
        </Link>
      </div>
    </div>
  )
};

export default Home;
