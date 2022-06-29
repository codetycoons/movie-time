import { styled } from "@mui/material/styles";
import logo from "../../assests/logo.png";
import classes from "./style.module.scss";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: "whitesmoke",
  position: "fixed",
  inset: "0px",
  zIndex: 1,
  display: "block",
}));

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  webkitBoxPack: "center",
  justifyContent: "center",
  webkitBoxAlign: "center",
  alignItems: "center",
  position: "absolute",
  inset: "0px",
  height: "100%",
  width: "100%",
}));

function Loader({ isLoading }) {
  if (!isLoading) return;
  return (
    <Container>
      <Wrapper>
        <img
          duration="4000"
          className={`${classes.animated} ${classes.zoomIn}`}
          image={logo}
          src={logo}
          alt="Movie Time"
        />
        <p
          textcolor="#696969"
          duration="4000"
          className={`${classes.animated} ${classes.fadeInUp}`}
          style={{ color: "rgb(105, 105, 105)" }}
        >
          Made by Sanket Zende
        </p>
      </Wrapper>
    </Container>
  );
}

export default Loader;
