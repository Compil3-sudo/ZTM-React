import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

type CardListProps = {
  filteredMonsters: Monster[];
};

const CardList = ({ filteredMonsters }: CardListProps) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
