import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./routes/HomePage";
import RiderPage from "./routes/RiderPage";
import CommuterPage from "./routes/CommuterPage";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/rider" element={<RiderPage />} />
          <Route path="/commuter" element={<CommuterPage />} />
          {/* <Route path="/verification" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
