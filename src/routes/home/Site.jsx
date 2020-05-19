import { h } from "preact";
import { Typography, Link, Button } from "@material-ui/core";

const Site = ({ siteResult, doesNotWork }) => {
  return (
    <>
      {siteResult ? (
        siteResult === "not found" ? (
          <Typography>
            No site found. If you have a referral code for this site then submit
            it <Link href="/submit">here</Link>
          </Typography>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5">
              <Link target="_blank" rel="noopener" href={siteResult.url}>
                {siteResult.name}
              </Link>
            </Typography>
            <Button
              variant="outlined"
              onClick={doesNotWork}
              style={{ color: "red", marginTop: 16 }}
              size="small"
            >
              Doesn't Work
            </Button>
          </div>
        )
      ) : null}
    </>
  );
};

export default Site;
