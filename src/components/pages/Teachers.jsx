import React from "react";
import "./Teachers.scss";
import SectionTitle from "../SectionTitle";
import { TeachersItems } from "../TeachersItems";

const Teachers = () => {
  return (
    <div className="teachers">
      <SectionTitle sectionName="O'qituvchilar" />
      <div className="teachers-content">
        {TeachersItems.map((item, index) => {
          return (
            <>
              <div className="teacher" key={index}>
                <span>{item.lessonName}</span>
                <p>
                  <i class="fa-solid fa-chalkboard-user"></i> {item.teacherName}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Teachers;
