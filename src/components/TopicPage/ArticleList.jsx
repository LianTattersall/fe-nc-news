import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import PageBar from "./PageBar";

function ArticleList({ articleList }) {
  return (
    <>
      <ul key="articleList">
        {articleList.map((article) => {
          return (
            <div key={article.article_id}>
              <p>{article.title}</p>
              <img src={article.article_img_url} alt="article image" />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
