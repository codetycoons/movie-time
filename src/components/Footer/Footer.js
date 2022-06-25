import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assests/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={classes.social}>
        <a
          href="https://github.com/codetycoons/movie-time"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <div className={classes.copyright}>
        <CopyrightIcon style={{ fontSize: ".8rem" }} />
        &nbsp;<span>Movie Time. All Rights Reserved.</span>
      </div>
      <div className={classes.authorDetails}>
        <span>Made by</span>&nbsp;
        <span className={classes.author}>Sanket Zende</span>
      </div>
    </div>
  );
}

export default Footer;
