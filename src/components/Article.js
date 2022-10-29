import React from "react";
import Button from "../components/reusable/Button";
import "./Article.css";

const Article = ({ article }) => {
  return (
    <section className="article">
      <h3 className="article-section">{article.sectionName}</h3>
      <h2 className="article-title">{article.webTitle}.</h2>
      <div>
        <a className="read-now-link" href={article.webUrl}>
          Read Now!
        </a>
        <Button text="Save for later" onClickHandler />
      </div>
    </section>
  );
};

export default Article;
