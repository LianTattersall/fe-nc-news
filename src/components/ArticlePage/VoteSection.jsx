import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useState } from "react";
import "./VoteSection.css";
import { patchVotes } from "../../api";

function VoteSection({ initialVotes, article_id }) {
  const [incVotes, setIncVotes] = useState(0);
  const [err, setErr] = useState(false);

  function upClickHandler() {
    setIncVotes((curr) => curr + 1);
    patchVotes(1, article_id).catch(() => {
      setErr(true);
      setIncVotes((curr) => curr - 1);
    });
  }

  function downClickHandler() {
    setIncVotes((curr) => curr - 1);
    patchVotes(-1, article_id)
      .then(() => {
        setErr(false);
      })
      .catch(() => {
        setErr(true);
        setIncVotes((curr) => curr + 1);
      });
  }
  return (
    <section className="vote-section">
      <ArrowUpward onClick={upClickHandler} />
      <p>{initialVotes !== undefined ? initialVotes + incVotes : null}</p>
      <ArrowDownward onClick={downClickHandler} />
      {err ? (
        <p>An error has occured. Apologies for the inconvenience</p>
      ) : null}
    </section>
  );
}

export default VoteSection;
