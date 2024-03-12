import "../assets/css/RiderPage.css";
import RiderTable from "../components/RiderTable.jsx";
import RiderProfile from "../components/RiderProfile.jsx";
const RiderPage = () => {
  return (
    <>
      <div className="container">
        <RiderTable />
        <RiderProfile />
      </div>

    </>
  );
}

export default RiderPage;