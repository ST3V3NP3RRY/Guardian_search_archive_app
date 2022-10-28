import React, { useState, useEffect } from "react";
import ArchiveSearch from "../components/ArchiceSearch";
import ArticleList from "../components/ArticleList";
import Heading from "../components/Heading";

const ArchiveContainer = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [keyWord, setKeyWord] = useState("news");

  async function fetchArticles() {
    const url = `https://content.guardianapis.com/search?q=${keyWord}&format=json&api-key=test`;
    const response = await fetch(url);
    const data = await response.json();
    setNewsArticles(data);
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  const searchArticlesByKeyword = (searchWord) => {
    console.log(searchWord);
    // const updateKeyWord = [...keyWord, searchWord];
    // setKeyWord(updateKeyWord);
  };

  return (
    <>
      <Heading />
      <ArchiveSearch searchArticlesByKeyword={searchArticlesByKeyword} />
      <ArticleList newsArticles={newsArticles} />
    </>
  );
};

export default ArchiveContainer;
