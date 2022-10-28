import React from "react";

const ArchiveSearch = () => {
  return (
    <form>
      <label htmlFor="search">Enter articles by keyword:</label>
      <input type="text" placeholder="Enter your search query"></input>
      <input type="submit"></input>
    </form>
  );
};

export default ArchiveSearch;
