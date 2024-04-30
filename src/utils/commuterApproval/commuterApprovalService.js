import axios from "axios";

const getCommuterApprovalRequests = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/Approval/GetApprovals?usertype=Commuter"
  );
  return res.data;
};

export const commuterApprovalService = {
  getCommuterApprovalRequests,
};
