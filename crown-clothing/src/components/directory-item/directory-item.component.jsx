import { useNavigate } from "react-router-dom";
import "./directory-item.styles";
import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = (props) => {
  const category = props.category;
  const navigate = useNavigate();

  const redirectToDirectory = () => {
    navigate("/shop/" + category.title.toLowerCase());
  };

  return (
    <DirectoryItemContainer onClick={redirectToDirectory}>
      <BackgroundImage imageurl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
