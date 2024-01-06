import React from "react";

export const MenuItem = ({ title, img, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="content">
      <h1 className="title">{title} </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
