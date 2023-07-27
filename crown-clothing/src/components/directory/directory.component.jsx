import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = (props) => {
  const categories = props.categories;

  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
