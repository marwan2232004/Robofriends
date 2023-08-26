import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
//import { robots } from "./robots";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.cypress.io/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const updateSearchField = (event) => setSearchField(event.target.value);

  const filteredArray = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

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
      <SearchBox updateSearch={updateSearchField} />
      <Scroll>
        <CardList robots={filteredArray} />
      </Scroll>
    </div>
  );
}

export default App;
