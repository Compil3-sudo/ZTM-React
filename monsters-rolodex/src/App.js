import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: { firstName: "Some", lastName: "Body" },
    //   course: "ZTM-React",
    // };

    // this.state = {
    //   monsters: [
    //     {
    //       name: "Linda",
    //       id: Math.random(),
    //     },
    //     {
    //       name: "Frank",
    //       id: Math.random(),
    //     },
    //     {
    //       name: "Jacky",
    //       id: Math.random(),
    //     },
    //   ],
    // };

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // make API request
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChangeHandler = (event) => {
    const searchedMonster = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField: searchedMonster };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChangeHandler } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onSearchChange={onSearchChangeHandler}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
