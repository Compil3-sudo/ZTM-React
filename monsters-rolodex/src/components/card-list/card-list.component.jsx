import React, { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

export default class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}
