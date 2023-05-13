import React from "react";
import SectionTitle from "../SectionTitle";
import ImgMaps from '../../assets/maps-img.jpg'
import './Contact.scss'

const Contact = () => {
  return(
    <div className="contact">
      <SectionTitle sectionName="Aloqa" />
      <div className="location">
        <img src={ImgMaps} alt="" />
      </div>
      <div className="contact-cards">
        <div className="card">
          <i class="fa-solid fa-location-dot"></i>
          <p className="card-title">Manzil</p>
          <p>Kaltaminor OFY Zarbo` ko`chasi 49 uy</p>
        </div>
        <div className="card">
          <i class="fa-solid fa-phone"></i>
          <p className="card-title">Telefon Raqami</p>
          <p>+998(94)598-07-47</p>
        </div>
        <div className="card">
          <i class="fa-solid fa-envelope"></i>
          <p className="card-title">Pochta manzili</p>
          <p>rusulnurzanov@gmail.com</p>
        </div>
      </div>
    </div>
  ) 
};

export default Contact;
