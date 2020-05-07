import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";
import { apiClient } from "../../apiClient";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import Site from "./Site";

const search = (searchStr, setSiteArr, setError, setLoading) => {
  if (searchStr) {
    setLoading(true);
    apiClient
      .get("/sites", {
        params: {
          searchStr,
        },
      })
      .then((res) => {
        setSiteArr(res.data);
        setError(false);
        setLoading(false);
      });
  } else {
    setError(true);
  }
};

const Home = () => {
  const [site, changeSite] = useState("");
  const [sitesArr, setSiteArr] = useState([]);
  const [textError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div class={style.home}>
      <h1>Search for a site</h1>
      <div class={style.searchRow}>
        <TextField
          placeholder={"example.com"}
          value={site}
          onChange={(e) => changeSite(e.target.value)}
          error={textError}
          disabled={loading}
        />
        <Button
          variant={"outlined"}
          onClick={() => search(site, setSiteArr, setError, setLoading)}
          style={{ marginLeft: 8, width: 86 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Search"}
        </Button>
      </div>
      <Site sitesArr={sitesArr} />
    </div>
  );
};

export default Home;
