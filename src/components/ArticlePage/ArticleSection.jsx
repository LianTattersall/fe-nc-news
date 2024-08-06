import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { formatDate } from "../../../utils/formatDate";

function ArticleSection({ article_id }) {
  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data.article);
    });
  }, []);
  console.log(article_id);

  return (
    <section className="article-section">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt="article img" />
      <p>
        <span>Auhtor:</span> {article.author}
      </p>
      <p>
        {article.created_at ? `Date: ${formatDate(article.created_at)}` : null}
      </p>
      <p>{article.body}</p>
    </section>
  );
}

export default ArticleSection;
