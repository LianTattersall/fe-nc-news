import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleList from "./ArticleList";
import PageBar from "./PageBar";
import { useParams } from "react-router-dom";
import React from "react";
import Lottie from "lottie-react";
import Loading from "../../../LoadingAnimation.json";

function Articles({ queries: { sort_by, order }, isError, setIsError }) {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(page, slug, sort_by, order)
      .then((articleData) => {
        setIsError(false);
        setIsLoading(false);
        setArticlesList(articleData.articles);
        setTotalCount(articleData.total_count);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setErr(err.response.data.msg);
      });
  }, [page, slug, sort_by, order]);

  if (isLoading) {
    return (
      <Lottie animationData={Loading} loop={true} style={{ height: "300px" }} />
    );
  }

  if (isError) {
    return <h2>{err}</h2>;
  }

  return (
    <>
      <ArticleList articleList={articlesList} />
      <PageBar setPage={setPage} totalCount={totalCount} page={page} />
    </>
  );
}

export default Articles;
