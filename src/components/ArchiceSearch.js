import React, { useState } from "react";
import "./ArchiveSearch.css";

const ArchiveSearch = ({ searchArticlesByKeyword }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (evt) => {
    evt.preventDefault();
    setSearchWord(evt.target.value);
  };

  return (
    <form className="form" onSubmit={searchArticlesByKeyword(searchWord)}>
      <label className="form-label" htmlFor="search">
        Search articles by keyword:
      </label>
      <input
        className="search-form-input"
        type="text"
        placeholder="Enter keyword"
        value={searchWord}
        onChange={handleChange}
      ></input>
      <input className="form-submit" type="submit"></input>
    </form>
  );
};

export default ArchiveSearch;
