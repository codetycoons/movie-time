import hp1 from "../../assests/hp1.gif";
import hp2 from "../../assests/hp2.gif";
import SimpleAccordion from "../../components/Accordion/Accordion";
import ButtonComponent from "../../components/Button";
import Backdrop from "./Backdrop";
import classes from "./style.module.scss";
import { primarytheme } from "../../utils";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/auth/register");
  };
  return (
    <div className={classes.Landing}>
      <Backdrop>
        <div className={classes.mainarea}>
          <h1 className={classes.title}>
            Unlimited movies, TV shows and more.
          </h1>
          <p>Watch anywhere, anytime without payments.</p>
          <div className={classes.search}>
            <input type="email" placeholder="Email Address" />
            <ButtonComponent
              text="Try For Free"
              variant="contained"
              size="medium"
              theme={primarytheme}
              color="primary"
              classes={classes.tryfree}
              onClick={loginHandler}
            />
          </div>
          <p>
            Ready to watch? Signup with your email to create or access your
            account
          </p>
        </div>
      </Backdrop>
      <div className={`${classes.container} ${classes.reverse}`}>
        <div className={classes.text}>
          <h1 className={classes.title}>Enjoy on your TV.</h1>
          <h2 className={classes.subtitle}>
            Watchx on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blu-ray players, and more.
          </h2>
        </div>
        <div className={classes.poster}>
          <img src={hp1} alt="" />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.poster}>
          <img src={hp2} alt="" style={{ width: "100%", height: "350px" }} />
        </div>
        <div className={classes.text}>
          <h1 className={classes.title}>Download and watch through torrent.</h1>
          <h2 className={classes.subtitle}>
            Save your data and watch all your favorite shows and movies offline
            directly through torrent .
          </h2>
        </div>
      </div>
      <div className={`${classes.container} ${classes.reverse}`}>
        <div className={classes.text}>
          <h1 className={classes.title}>Watch everywhere.</h1>
          <h2 className={classes.subtitle}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div className={classes.poster}>
          <img src={hp1} alt="" />
        </div>
      </div>
      <div className={classes.container}>
        <SimpleAccordion />
      </div>
    </div>
  );
}

export default Landing;
