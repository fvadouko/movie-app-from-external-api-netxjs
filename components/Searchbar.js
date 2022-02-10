import { Context } from "../lib/Context";
import Router from "next/router";
import React from "react";
const Searchbar = () => {
  const { setQuery, query } = React.useContext(Context);
  const setResults = (e) => {
    e.preventDefault();
    Router.push({ pathname: "/movie", query: { query: query } });
  };
  return (
    <form style={{ marginBottom: "20px" }} onSubmit={(e) => setResults(e)}>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleCheck1"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Title ..."
        />
      </div>
    </form>
  );
};

export default Searchbar;
