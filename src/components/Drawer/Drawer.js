import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAuth } from "../../lib/auth";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer({
  isDrawerOpen,
  setDrawerOpen,
  anchor,
}) {
  const navigate = useNavigate();
  const { getUser, logoutUser } = useAuth();
  const Logout = () => {
    return (
      <div
        onClick={() => {
          setDrawerOpen(false);
          logoutUser();
          navigate("/");
        }}
      >
        <span>Logout</span>
      </div>
    );
  };

  let options = ["Movies", "Series", "My List"];
  if (getUser()) {
    options = [...options, <Logout />];
  }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {options.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor={anchor}
      open={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      {list(anchor)}
    </Drawer>
  );
}
