import React from "react";
import "./ArticleList.css";
import Article from "../components/Article";

const ArticleList = ({ newsArticles }) => {
  const Articles =
    newsArticles.response &&
    newsArticles.response.results.map((article) => {
      return (
        <>
          <Article key={article.webPublicationDate} article={article} />
        </>
      );
    });
  return <>{Articles}</>;
};

export default ArticleList;

// const articles = newsArticles.response.results.map((article) => {
//     console.log(article);
//     return <Article article={article} />;
