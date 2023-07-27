import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";
import React from "react";

const DirectoryItem = (props) => {
  const category = props.category;

  const navigate = useNavigate();

  const redirectToDirectory = () => {
    navigate("/shop/" + category.title);
  };

  return (
    <div className="directory-item-container" onClick={redirectToDirectory}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className="directory-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
