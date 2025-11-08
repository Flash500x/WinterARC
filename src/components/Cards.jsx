import React from "react";

const Cards = ({ head, des, iconFill, iconCategory, bgColor = "#092b24" }) => {
  return (
    <div className="p-3 sm:p-4 rounded-xl" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-row justify-start items-center gap-1.5 mb-2">
        <i className={`${iconFill} ${iconCategory} text-white text-2xl`}></i>
        <p className="text-white text-2xl lg:text-3xl">{head}</p>
      </div>
      <p className="text-base text-white lg:text-2xl">{des}</p>
    </div>
  );
};

export default Cards;
