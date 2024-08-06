import { Link } from "react-router-dom";
import "./ArticleCard.css";
import { formatDate } from "../../../utils/formatDate";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li className="article-card">
        <img src={article.article_img_url} alt="article img" />
        <div className="articleInfo">
          <h2>{article.title}</h2>
          <p>Author: {article.author}</p>
          <p>{article.topic}</p>
          <p>Created at: {formatDate(article.created_at)}</p>
        </div>
      </li>
    </Link>
  );
}

export default ArticleCard;
