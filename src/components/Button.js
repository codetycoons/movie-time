import * as React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

export default function ButtonComponent({
  text = "",
  variant = "",
  icon = "",
  size = "medium",
  theme = {},
  color = "",
  onClick,
  style,
  classes,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        startIcon={icon}
        size={size}
        color={color}
        onClick={onClick}
        style={style}
        className={classes}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}
