import { Context } from "../lib/Context";
import Router from "next/router";
const Searchbar = () => {
  const { setQuery, query } = React.useContext(Context);
  const setResults = (e) => {
    e.preventDefault();
    Router.push({ pathname: "/movie", query: { query: query } });
  };
  return (
    <form style={{ marginBottom: "20px" }} onSubmit={(e) => setResults(e)}>
      <div class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          id="exampleCheck1"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Title ..."
        />
      </div>
    </form>
  );
};

export default Searchbar;
