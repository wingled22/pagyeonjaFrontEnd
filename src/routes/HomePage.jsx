import "../assets/css/HomePage.css";
import { Row, Col } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import CardTotalRider from "../components/CardTotalRider";
import AVGCommuters from "../components/AVG-Commuters";
import AVGrevenue from "../components/AVG-Revenue";
const HomePage = () => {
  return (
    <>
      <h1 className="greatings">Good Afternoon, Admin</h1>
      <NavigationBar />
      <CardTotalRider/>
      <AVGCommuters/>
      <AVGrevenue/>
    </>
  );
};

export default HomePage;
