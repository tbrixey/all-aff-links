import { h } from "preact";
import style from "./style";
import { useState } from "preact/hooks";
import { apiClient } from "../../apiClient";
import {
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().url(),
});

const SubmitSite = () => {
  const [values, setValues] = useState({
    site: "",
    url: "",
    submitting: false,
    error: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitNewURL = () => {
    schema
      .isValid({
        name: values.site,
        url: values.url,
      })
      .then((valid) => {
        console.log("VALID", valid);
        if (valid) {
          setValues({ ...values, submitting: true, error: "" });
          apiClient
            .post("/sites", {
              name: values.site,
              url: values.url,
            })
            .then((res) => {
              setValues({ site: "", url: "", submitting: false, error: "" });
            })
            .catch((err) => {
              alert("Error submitting. Try again in a few or contact us");
              setValues({ ...values, submitting: false });
            });
        } else {
          setValues({
            ...values,
            error: "Make sure both fields are filled out and URL is valid",
          });
        }
      });
  };

  return (
    <div class={style.container}>
      <Typography variant="h4">
        Submit your referral code to the pool!
      </Typography>
      <Typography variant="h6">Who knows... yours could be next 💰</Typography>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            name="site"
            onChange={handleInputChange}
            value={values.site}
            error={!values.site && values.error}
            style={{ width: 250 }}
            placeholder="example"
          />
        </Grid>
        <Grid item>
          <TextField
            name="url"
            onChange={handleInputChange}
            value={values.url}
            error={values.error}
            style={{ width: 250 }}
            placeholder="https://example.com/ref?=you"
          />
        </Grid>
        {values.error && (
          <Typography variant="caption" style={{ color: "red" }}>
            {values.error}
          </Typography>
        )}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={submitNewURL}
            style={{ width: 86 }}
          >
            {values.submitting ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              "Submit"
            )}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SubmitSite;
