import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";
import { apiClient } from "../../apiClient";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Site from "./Site";

const search = (searchStr, setSiteResult, setError, setLoading) => {
  if (searchStr) {
    setLoading(true);
    apiClient
      .get("/sites", {
        params: {
          searchStr,
        },
      })
      .then((res) => {
        setSiteResult(res.data);
        setError(false);
        setLoading(false);
      });
  } else {
    setError(true);
  }
};

const Home = () => {
  const [site, changeSite] = useState("");
  const [siteResult, setSiteResult] = useState();
  const [textError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div class={style.home}>
      <Typography variant="h6">Save money. Get free stuff.</Typography>
      <Typography variant="h6">Make someone else money. 🤑</Typography>
      <Typography variant="h3">Search for a site</Typography>
      <div class={style.searchRow}>
        <TextField
          placeholder={"example.com"}
          value={site}
          onChange={(e) => changeSite(e.target.value)}
          error={textError}
          disabled={loading}
        />
        <Button
          variant={"contained"}
          onClick={() => search(site, setSiteResult, setError, setLoading)}
          style={{ marginLeft: 8, width: 86 }}
          disabled={loading}
          color="primary"
        >
          {loading ? (
            <CircularProgress size={24} color="secondary" />
          ) : (
            "Search"
          )}
        </Button>
      </div>
      <div style={{ height: 40 }}>
        <Site siteResult={siteResult} />
      </div>
    </div>
  );
};

export default Home;
