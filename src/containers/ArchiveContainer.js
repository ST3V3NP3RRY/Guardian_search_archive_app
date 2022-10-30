import React, { useState, useEffect } from "react";
import ArchiveSearch from "../components/ArchiveSearch";
import ArticleList from "../components/ArticleList";
import Heading from "../components/Heading";
import FavouritesList from "../components/FavouritesList";
import "./ArchiveContainer.css";

const ArchiveContainer = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [url, setUrl] = useState(
    "https://content.guardianapis.com/search?q=news&format=json&api-key=test"
  );
  const [favArticles, setFavArticles] = useState([]);

  async function fetchArticles() {
    const apiUrl = url;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setNewsArticles(data);
  }

  useEffect(() => {
    fetchArticles();
  }, [url, favArticles]); //  I keep gettin a dependancy warning

  const onInputSearch = (searchUrl) => {
    setUrl(searchUrl);
  };

  const addArticleToFavourites = (article) => {
    const copyFavArticles = [...favArticles];
    copyFavArticles.push(article);
    setFavArticles(copyFavArticles);
  };

  return (
    <>
      <Heading />
      <ArchiveSearch onInputSearch={onInputSearch} />
      <section className="archive-container">
        <ArticleList
          newsArticles={newsArticles}
          onFavouriteButtonClick={addArticleToFavourites}
        />
      </section>
      <FavouritesList favArticles={favArticles} />
    </>
  );
};

export default ArchiveContainer;
