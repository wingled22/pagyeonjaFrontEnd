import "../assets/css/HomePage.css";
import Cards from "../components/Homepage/cards/Cards";
import Charts from "../components/Homepage/Charts.jsx";

const HomePage = () => {
  return (
    <>
      <h1 className="greatings fs-1 fs-md-2 fs-sm-3 fs-xs-5">
        Good Afternoon, Admin
      </h1>
      <Cards />
      <Charts/>
    </>
  );
};

export default HomePage;
