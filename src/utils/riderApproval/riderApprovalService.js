import axios from "axios";
const getRiderApprovalRequests = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/Approval/GetApprovals?userType=Rider"
  );
  return res.data;
};

export const riderApprovalService = {
  getRiderApprovalRequests,
};
