import "../assets/css/HomePage.css";
import { Row, Col, Card } from "reactstrap";
// import NavigationBar from "../components/NavigationBar";
import Cards from "../cards/Card";
import Charts from "../components/Homepage/Charts.jsx";



const HomePage = () => {
  return (
    <>
      <h1 className="greatings">Good Afternoon, Admin</h1>
        <Charts/>
        {/* <Cards/> */}
        

    </>
  );
};

export default HomePage;
