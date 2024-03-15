import "../assets/css/RiderPage.css";
import RiderTable from "../components/RiderTable.jsx";
import RiderProfile from "../components/RiderProfile.jsx";
import { Row, Col } from 'reactstrap';
const RiderPage = () => {
  return (
    <>
      <Row>
      
          <Row className="Row1">
            <RiderProfile />
          </Row>
  

          <Row className="Row2">
            <RiderTable />
          </Row>
 
      </Row>


    </>
  );
};

export default RiderPage;
