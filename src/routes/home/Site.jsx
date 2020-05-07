import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./SiteStyle";
import { Typography, Link } from "@material-ui/core";

const Site = ({ sitesArr }) => {
  return (
    <div class={style.siteContainer}>
      {sitesArr.map((site, idx) => (
        <Typography key={idx}>
          <Link target="_blank" rel="noopener" href={site.url}>
            {site.name}
          </Link>
        </Typography>
      ))}
    </div>
  );
};

export default Site;
