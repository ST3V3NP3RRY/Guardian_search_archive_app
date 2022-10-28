import React from "react";
import "./Article.css";

const Article = ({ article }) => {
  return (
    <section className="article">
      <h3 className="article-section">{article.sectionName}</h3>
      <h2 className="article-title">{article.webTitle}.</h2>
      <a className="read-now-link" href={article.webUrl}>
        Read Now!
      </a>
    </section>
  );
};

export default Article;
