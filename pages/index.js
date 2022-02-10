import fetch from "node-fetch";

import List from "../components/List";

export default function Home({ results }) {
  return <>{results && <List results={results} />}</>;
}

export async function getStaticProps() {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=5a0f7339&s=deadpool`
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
}
