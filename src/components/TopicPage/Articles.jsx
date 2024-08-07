import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleList from "./ArticleList";
import PageBar from "./PageBar";

function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page)
      .then((articleData) => {
        setIsLoading(false);
        setArticlesList(articleData.articles);
        setTotalCount(articleData.total_count);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [page]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>
        An error has occured and the page cannot be loaded at the moment.
        Apologies for the inconvenience.
      </p>
    );
  }

  return (
    <>
      <ArticleList articleList={articlesList} />
      <PageBar setPage={setPage} totalCount={totalCount} page={page} />
    </>
  );
}

export default Articles;
