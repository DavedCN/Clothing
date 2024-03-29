import React from "react";
import { useNavigate } from "react-router-dom";

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div className={`menu-item ${size}`} onClick={handleClick}>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
