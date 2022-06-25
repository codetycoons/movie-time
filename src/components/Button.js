import * as React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

export default function ButtonComponent({
  text,
  variant,
  icon,
  size,
  theme,
  color,
  onClick,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        startIcon={icon}
        size={size}
        color={color}
        onClick={onClick}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
}
