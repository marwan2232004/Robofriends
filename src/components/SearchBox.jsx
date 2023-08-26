import React from "react";

const SearchBox = ({updateSearch}) => {
  return (
    <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="text"
      placeholder="Search..."
      onChange={updateSearch}
    />
    </div>
  );
};

export default SearchBox;
