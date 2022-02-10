import fetch from "node-fetch";
import React from "react";
import List from "../components/List";
function Movie({ results }) {
  return (
    <>
      <List results={results} />
    </>
  );
}
export const getServerSideProps = async (context) => {
  const search = context?.query?.query ?? "";

  // Get external data from the file system, API, DB, etc.
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=5a0f7339&s=${search}&type=movie`
  );
  const data = (await response.json()) ?? [];
  const results = data.Search ?? [];

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results,
    },
  };
};
export default Movie;
