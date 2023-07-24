import React, { Component } from "react";

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
          () => console.log(this.state)
        )
      );
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        {/* <div>App Component</div>
        <h1>
          {this.state.name.firstName} {this.state.name.lastName}
        </h1>
        <h2>Learning: {this.state.course}</h2>
        <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  name: { firstName: "New", lastName: "Name" },
                };
              },
              // callBack function
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Change Name
        </button> */}
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
