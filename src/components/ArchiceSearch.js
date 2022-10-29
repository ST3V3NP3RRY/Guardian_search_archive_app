import React, { useState } from "react";
import "./ArchiveSearch.css";

const ArchiveSearch = ({ onInputSearch }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleInputChange = (evt) => {
    setSearchWord(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const inputToSubmit = searchWord.trim();
    if (!searchWord) {
      return;
    }

    const searchUrl = `https://content.guardianapis.com/search?q=${inputToSubmit}&format=json&api-key=test`;
    onInputSearch(searchUrl);
    setSearchWord("");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form-label" htmlFor="search">
        Search articles by keyword:
      </label>
      <input
        className="search-form-input"
        type="text"
        id="search"
        placeholder="Enter keyword"
        value={searchWord}
        onChange={handleInputChange}
        required
      ></input>
      <input className="form-submit" type="submit"></input>
    </form>
  );
};

export default ArchiveSearch;
