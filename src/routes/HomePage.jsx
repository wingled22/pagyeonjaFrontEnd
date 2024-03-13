import "../assets/css/HomePage.css";
import { Row, Col, Card } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import Cards from "../cards/Card";
// import BarChart from "../components/BarChart";

const HomePage = () => {
  return (
    <>
      <h1 className="greatings">Good Afternoon, Admin</h1>
        <Cards/>
    </>
  );
};

export default HomePage;
