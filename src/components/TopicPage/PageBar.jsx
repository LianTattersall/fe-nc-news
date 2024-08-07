function PageBar({ totalCount, setPage, page }) {
  const pages = Math.ceil(totalCount / 10);

  const pagesArr = [];
  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  }

  function handlePageClick(num) {
    return () => {
      setPage(num);
    };
  }

  return (
    <div className="pages">
      {pagesArr.map((num) => {
        return (
          <button
            key={num}
            onClick={handlePageClick(num)}
            className={num === page ? "onPage" : ""}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}

export default PageBar;
