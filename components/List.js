import React from "react";
import Card from "../components/Card";

const List = ({ results }) => {
  if (!results.length) return <p>No Results :(</p>;
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
