import classes from "./Header.module.scss";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assests/logo.png";
import favicon from "../../assests/favicon.png";
import { Link } from "react-router-dom";
import AutocompleteComponent from "../AutoComplete/AutoComplete";
import { useAuth } from "../../lib/auth";
import ButtonComponent from "../Button";
import { useNavigate } from "react-router-dom";
import { primarytheme } from "../../utils";
import TemporaryDrawer from "../Drawer/Drawer";

export default function Header() {
  const navigate = useNavigate();
  const isUserLoggedIn = useAuth().getUser();
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div
      className={classes.Header}
      style={
        isUserLoggedIn ? { background: "#000" } : { background: "transparent" }
      }
    >
      <div className={classes.wrapper}>
        {isUserLoggedIn && (
          <div className={classes.hamburger}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon
                style={{ fontSize: "2.5rem" }}
                onClick={() => setDrawerOpen(true)}
              />
              <TemporaryDrawer
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={setDrawerOpen}
                anchor="left"
              />
            </IconButton>
          </div>
        )}
        <div style={{ flex: "1" }}>
          <Link to="/">
            <img
              className={`${classes.logo} ${classes.desktopLogo}`}
              src={logo}
              alt="logo"
            />
            <img
              className={`${classes.logo} ${classes.mobileLogo}`}
              src={favicon}
              alt="logo"
            />
          </Link>
        </div>
        {isUserLoggedIn && <AutocompleteComponent />}
        {!isUserLoggedIn && (
          <ButtonComponent
            onClick={() => navigate("/auth/login")}
            text="Sign In"
            variant="contained"
            size="medium"
            theme={primarytheme}
            color="primary"
          />
        )}
      </div>
    </div>
  );
}
