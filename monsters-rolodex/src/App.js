import React, { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChangeHandler = (event) => {
    const searchedMonster = event.target.value.toLocaleLowerCase();

    setSearchField(searchedMonster);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

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
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     // make API request
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChangeHandler = (event) => {
//     const searchedMonster = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField: searchedMonster };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChangeHandler } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onSearchChange={onSearchChangeHandler}
//           placeholder="Search Monsters"
//           className="search-box"
//         />
//         <CardList filteredMonsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
