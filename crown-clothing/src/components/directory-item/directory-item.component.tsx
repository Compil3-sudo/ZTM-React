import { useNavigate } from "react-router-dom";
import "./directory-item.styles";
import React, { FC } from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { DirectoryCategory } from "../directory/directory.component";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const navigate = useNavigate();

  const redirectToDirectory = () => {
    navigate("/shop/" + category.title.toLowerCase());
  };

  return (
    <DirectoryItemContainer onClick={redirectToDirectory}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
