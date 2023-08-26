import React from "react";
import Card from "./Card";

// Remember that what the function take is like struct  you hove to destruct it or select which  prop you want to use
const CardList = ({robots}) => {
  const cardArray = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });
  return (<div>{cardArray}</div>);
};

export default CardList;
