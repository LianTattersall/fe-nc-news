import { useState } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";

function AddComment({ setComments }) {
  const [textInput, setTextInput] = useState("");
  const [err, setErr] = useState(false);
  const { article_id } = useParams();

  function handleChange(event) {
    setTextInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTextInput("");
    setComments((curr) => {
      const newComment = {
        body: textInput,
        author: "tickle122",
        comment_id: curr.length + 1,
      };
      return [newComment, ...curr];
    });
    postComment(article_id, textInput, "tickle122")
      .then((data) => {
        setErr(false);
        setComments((curr) => {
          const copy = JSON.parse(JSON.stringify(curr));
          copy[0] = data.comment;
          return copy;
        });
      })
      .catch(() => {
        setErr(true);
        setComments((curr) => {
          const copy = JSON.parse(JSON.stringify(curr));
          copy.splice(0, 1);
          return copy;
        });
      });
  }

  return (
    <form style={{ margin: "40px" }}>
      <label htmlFor="input-comment">Add a comment</label>
      <textarea
        id="input-comment"
        style={{ height: "50px", width: "100%" }}
        value={textInput}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Post!</button>
      {err ? (
        <p>An error has occured. Apologies for the inconvenience</p>
      ) : null}
    </form>
  );
}

export default AddComment;
