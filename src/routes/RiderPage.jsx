import "../assets/css/RiderPage.css";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/Rider/RiderProfile.jsx";
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
};

export default RiderPage;
