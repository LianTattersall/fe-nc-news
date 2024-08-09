import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { formatDate } from "../../../utils/formatDate";
import "./ArticleSection.css";
import VoteSection from "./VoteSection";
import React from "react";
import Lottie from "lottie-react";
import Loading from "../../../LoadingAnimation.json";

function ArticleSection({ article_id, setIsErr, isErr }) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [errData, setErrData] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setIsErr(false);
        setLoading(false);
        setArticle(data.article);
      })
      .catch((err) => {
        setLoading(false);
        setErrData(err.response.data.msg);
        setIsErr(true);
      });
  }, []);

  if (loading) {
    return (
      <Lottie animationData={Loading} loop={true} style={{ height: "300px" }} />
    );
  }

  if (isErr) {
    return <h2>{errData}</h2>;
  }

  return (
    <>
      <section className="article-section">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt="article img" />
        <div className="vote-date">
          <VoteSection initialVotes={article.votes} />
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
