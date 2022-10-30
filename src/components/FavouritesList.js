import React from "react";
import "./FavouritesList.css";

const FavouritesList = ({ favArticles }) => {
  const favLinks =
    favArticles &&
    favArticles.map((article) => {
      return (
        <>
          <li className="fav-links">
            <a href={article.webUrl}>{article.webTitle}</a>
          </li>
        </>
      );
    });

  return (
    <section className="favourites-list">
      <h2 className="fav-header">Your Reading List</h2>
      <ul>{favLinks}</ul>
    </section>
  );
};

export default FavouritesList;

//
