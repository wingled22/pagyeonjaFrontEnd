import "../assets/css/RiderPage.css";
import RiderTable from "../components/RiderTable.jsx";
import RiderProfile from "../components/RiderProfile.jsx";
import { Row } from 'reactstrap';
const RiderPage = () => {
  return (
    <>
      <Row>
        <RiderProfile />
      </Row>
      <Row>
        <RiderTable />
      </Row>

    </>
  );
}

export default RiderPage;