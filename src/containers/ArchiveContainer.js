import React, { useState, useEffect } from "react";
import ArchiveSearch from "../components/ArchiceSearch";
import ArticleList from "../components/ArticleList";
import Heading from "../components/Heading";
import "./ArchiveContainer.css";

const ArchiveContainer = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [url, setUrl] = useState(
    "https://content.guardianapis.com/search?q=news&format=json&api-key=test"
  );

  async function fetchArticles() {
    const apiUrl = url;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setNewsArticles(data);
  }

  useEffect(() => {
    fetchArticles();
  }, [url]);

  const onInputSearch = (searchUrl) => {
    setUrl(searchUrl);
  };

  return (
    <>
      <Heading />
      <ArchiveSearch onInputSearch={onInputSearch} />
      <section className="archive-container">
        <ArticleList newsArticles={newsArticles} />
      </section>
    </>
  );
};

export default ArchiveContainer;
