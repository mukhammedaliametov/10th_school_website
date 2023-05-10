import React from "react";
import SectionTitle from "../SectionTitle";
import Maps from "../Maps";

const Contact = () => {
  return(
    <div className="contact">
      <SectionTitle sectionName="Aloqa" />
      <div className="location">
        <Maps />
      </div>
    </div>
  ) 
};

export default Contact;
