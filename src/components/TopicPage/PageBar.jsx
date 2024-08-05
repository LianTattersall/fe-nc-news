function PageBar({ totalCount, setPage }) {
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
          <button key={num} onClick={handlePageClick(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
}

export default PageBar;
