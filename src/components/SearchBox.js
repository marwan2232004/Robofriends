import React from "react";

const SearchBox = ({updatesearch}) => {
  return (
    <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="text"
      placeholder="Search..."
      onChange={updatesearch}
    />
    </div>
  );
};

export default SearchBox;
