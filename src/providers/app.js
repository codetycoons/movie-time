import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const RouteProvider = ({ children }) => {
  return (
    <>
      <Router>
        <Header />
        {children}
        <Footer />
      </Router>
    </>
  );
};
