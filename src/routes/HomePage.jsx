import "../assets/css/HomePage.css";
import { Row, Col } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import CardTotalRider from "../components/Homepage/CardTotalRider";
import AVGCommuters from "../components/Homepage/AVG-Commuters";
import AVGrevenue from "../components/Homepage/AVG-Revenue";
const HomePage = () => {
  return (
    <>
      <h1 className="greatings">Good Afternoon, Admin</h1>
      {/* <CardTotalRider />
      <AVGCommuters />
      <AVGrevenue /> */}
    </>
  );
};

export default HomePage;
