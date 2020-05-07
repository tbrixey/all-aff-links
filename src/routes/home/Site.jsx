import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./SiteStyle";
import { Typography } from "@material-ui/core";

const Site = ({ sitesArr }) => {
  return (
    <div class={style.siteContainer}>
      {sitesArr.map((site, idx) => (
        <Typography key={idx}>{site.url}</Typography>
      ))}
    </div>
  );
};

export default Site;
