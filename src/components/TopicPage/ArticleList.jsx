import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import PageBar from "./PageBar";
import ArticleCard from "./ArticleCard";

function ArticleList({ articleList }) {
  return (
    <>
      <ul key="articleList">
        {articleList.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
}

export default ArticleList;
