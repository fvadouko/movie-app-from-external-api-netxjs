import Head from "next/head";
import fetch from "node-fetch";
import List from "../components/List";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  return <>{results && <List results={results} />}</>;
}

export async function getStaticProps() {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=5a0f7339&type=movie`
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
