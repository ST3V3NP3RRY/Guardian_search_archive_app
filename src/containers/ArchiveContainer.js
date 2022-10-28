import React, { useState, useEffect } from "react";
import ArchiveSearch from "../components/ArchiceSearch";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";
import Heading from "../components/Heading";

const ArchiveContainer = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  async function fetchArticles() {
    const url =
      "https://content.guardianapis.com/search?q=brexit&format=json&api-key=test";
    const response = await fetch(url);
    const data = await response.json();
    setNewsArticles(data);
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Heading />
      <ArchiveSearch />
      <ArticleList newsArticles={newsArticles} />
    </>
  );
};

export default ArchiveContainer;
