import React from "react";
import "./ArticleList.css";
import Article from "../components/Article";

const ArticleList = ({ newsArticles, onFavouriteButtonClick }) => {
  let articles;
  if (newsArticles.response && newsArticles.response.pages === 0) {
    return (
      <div className="search-warning">
        <h2>Sorry!</h2>
        <h4>
          We can't find any articles associated with that word, right now.
          Please check your spelling and try again.
        </h4>
      </div>
    );
  } else {
    articles =
      newsArticles.response &&
      newsArticles.response.results.map((article) => {
        return (
          <>
            <Article
              key={article.webPublicationDate}
              article={article}
              onFavouriteButtonClick={onFavouriteButtonClick}
            />
          </>
        );
      });
  }
  return <>{articles}</>;
};

export default ArticleList;
