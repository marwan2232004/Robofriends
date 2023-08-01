import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
//import { robots } from "./robots";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  updatesearchfield = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { searchfield, robots } = this.state;
    const filteredArray = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return (
        <div className="tc">
          <h1 className="f1">ROBOFIRENDS</h1>
          <h1 className="f2">Loading...</h1>
        </div>
      );
    }
    return (
      <div className="tc">
        <h1 className="f1">ROBOFIRENDS</h1>
        <SearchBox updatesearch={this.updatesearchfield} />
        <Scroll>
          <CardList robots={filteredArray} />
        </Scroll>
      </div>
    );
  }
}

export default App;
