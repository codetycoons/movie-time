import background from "../../assests/background.jpg";
import classes from "./style.module.scss";
function Backdrop({ children }) {
  return (
    <div className={classes.Landing}>
      <div
        className={classes.banner}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${background})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Backdrop;
