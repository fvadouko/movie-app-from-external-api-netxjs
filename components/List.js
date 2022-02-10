import React from "react";
import Card from "../components/Card";
import { Context } from "../lib/Context";

const List = ({ results }) => {
  const {
    state: { links, active, query },
    setActive,
  } = React.useContext(Context);
  if (!results.length && query.trim() !== "") return <p>No Results :(</p>;
  return (
    <div style={{ height: "calc(100vh - 180px)", overflow: "scroll" }}>
      {results &&
        results.map((result, index) => (
          <Card key={`card-${index}`} {...result} />
        ))}
    </div>
  );
};

export default List;
