import React from "react";

const Article = ({ article }) => {
  return (
    <section>
      <h3>{article.sectionName}</h3>
      <h2>{article.webTitle}.</h2>
      <a href={article.webUrl}>Read Now!</a>
    </section>
  );
};

export default Article;
