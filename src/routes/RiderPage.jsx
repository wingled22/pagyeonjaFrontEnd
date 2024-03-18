import "../assets/css/RiderPage.css";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/Rider/RiderProfile.jsx";
import { Row, Col, Container} from 'reactstrap';
const RiderPage = () => {
  return (
    <>      
          <Row className="Row1">
            <RiderProfile />
          </Row>
          <Row className="Row2">
            <RiderTable />
          </Row>

    </>
  );
};

export default RiderPage;
