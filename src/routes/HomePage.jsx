import { Row, Col } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import CardTotalRider from "../components/CardTotalRider";
import AVGCommuters from "../components/AVG-Commuters";
import AVGrevenue from "../components/AVG-Revenue";
const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <CardTotalRider/>
      <AVGCommuters/>
      <AVGrevenue/>
    </>
  );
};

export default HomePage;
