import { h } from "preact";
import { useState } from "preact/hooks";
import { Typography, Link } from "@material-ui/core";

const Site = ({ siteResult }) => {
  return (
    <>
      {siteResult && (
        <Typography>
          <Link target="_blank" rel="noopener" href={siteResult.url}>
            {siteResult.name}
          </Link>
        </Typography>
      )}
    </>
  );
};

export default Site;
