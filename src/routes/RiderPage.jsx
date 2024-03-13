import "../assets/css/RiderPage.css";
import RiderTable from "../components/Rider/RiderTable.jsx";
import RiderProfile from "../components/Rider/RiderProfile.jsx";
const RiderPage = () => {
  return (
    <>
      <div className="container">
        <RiderTable />
        <RiderProfile />
      </div>
    </>
  );
};

export default RiderPage;
