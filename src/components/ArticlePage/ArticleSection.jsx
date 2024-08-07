import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { formatDate } from "../../../utils/formatDate";
import "./ArticleSection.css";
import VoteSection from "./VoteSection";

function ArticleSection({ article_id }) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setLoading(false);
      setArticle(data.article);
    });
  }, []);

  if (loading) {
    return <p>Loading Article</p>;
  }

  return (
    <>
      <section className="article-section">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="article img" />
        <div className="vote-date">
          <VoteSection initialVotes={article.votes} article_id={article_id} />
          <div className="spacer"></div>
          <p className="date">
            {article.created_at ? ` ${formatDate(article.created_at)}` : null}
          </p>
        </div>
        <p className="author">By {article.author}</p>
        <p className="body">{article.body}</p>
      </section>
    </>
  );
}

export default ArticleSection;
