import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { formatDate } from "../../../utils/formatDate";
import "./ArticleSection.css";

function ArticleSection({ article_id }) {
  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
  }, []);

  return (
    <section className="article-section">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="article img" />
      <p className="date">
        {article.created_at ? ` ${formatDate(article.created_at)}` : null}
      </p>
      <p className="author">By {article.author}</p>
      <p className="body">{article.body}</p>
    </section>
  );
}

export default ArticleSection;
