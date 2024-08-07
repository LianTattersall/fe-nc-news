import { useState } from "react";

function SortOptions({ setQueries }) {
  const [sortByInput, setSortByInput] = useState("created_at");
  const [orderInput, setOrderInput] = useState("desc");
  console.log(sortByInput, orderInput);
  function handleChange(setter) {
    return function (event) {
      setter(event.target.value);
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    setQueries({ order: orderInput, sort_by: sortByInput });
  }

  return (
    <form>
      <label htmlFor="sort-by">Sort By:</label>
      <select
        name="sort-by"
        id="sort-by"
        onChange={handleChange(setSortByInput)}
        value={sortByInput}
      >
        <option value="created_at">Date</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment Count</option>
      </select>
      <label htmlFor="order">Order:</label>
      <select
        name="order"
        id="order"
        onChange={handleChange(setOrderInput)}
        value={orderInput}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <button onClick={handleSubmit}>Sort Articles</button>
    </form>
  );
}

export default SortOptions;
