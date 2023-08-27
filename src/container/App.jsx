import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../actions";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
//import { robots } from "./robots";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    IsPending: state.requestRobots.IsPending,
    err: state.requestRobots.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchField: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props) {
  // const [robots, setRobots] = useState([]);
  // const [searchField, setSearchField] = useState("");

  const { searchField, updateSearchField, robots, IsPending } = props;
  useEffect(() => {
    props.onRequestRobots();
  }, []);

  //const updateSearchField = (event) => setSearchField(event.target.value);

  const filteredArray = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (IsPending) {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
