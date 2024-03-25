import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./routes/HomePage";
import RiderPage from "./routes/RiderPage";
import CommuterPage from "./routes/CommuterPage";
import RiderApprovalDashboard from "./routes/RiderApprovalPage";
import CommuterApprovalPage from "./routes/CommuterApprovalPage";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/rider" element={<RiderPage />} />
          <Route path="/commuter" element={<CommuterPage />} />
          <Route path="/rider-approval" element={<RiderApprovalDashboard />} />
          <Route path="/commuter-approval" element={<CommuterApprovalPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
