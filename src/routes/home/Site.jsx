import { h } from "preact";
import { Typography, Link } from "@material-ui/core";

const Site = ({ siteResult }) => {
  return (
    <>
      {siteResult ? (
        siteResult === "not found" ? (
          <Typography>
            No site found. If you have a referral code for this site then submit
            it <Link href="/submit">here</Link>
          </Typography>
        ) : (
          <Typography>
            <Link target="_blank" rel="noopener" href={siteResult.url}>
              {siteResult.name}
            </Link>
          </Typography>
        )
      ) : null}
    </>
  );
};

export default Site;
