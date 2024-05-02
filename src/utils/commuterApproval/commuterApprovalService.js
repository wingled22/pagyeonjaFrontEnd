import axios from "axios";

const getCommuterApprovalRequests = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/Approval/GetApprovals?usertype=Commuter"
  );
  return res.data;
};

const getCommuter = async (userId) => {
  const res = await axios.get(
    `http://localhost:5180/api/CommuterRegistration/getcommuter?id=${userId}`
  );
  return res.data;
};

const respondCommuterApprovalRequest = async (
  userId,
  approvalResponse,
  rejectionMessage
) => {
  const res = await axios.put(
    `http://localhost:5180/api/Approval/UserApprovalResponse?usertype=Commuter&userid=${userId}&response=${approvalResponse}&rejectionmessage=${rejectionMessage}`
  );
  return res.data;
};

const getCommuterApprovalRequirements = async (userId) => {
  const res = await axios.get(
    `http://localhost:5180/api/document/getdocuments?id=${userId}&usertype=Commuter`
  );
  return res.data;
};

export const commuterApprovalService = {
  getCommuterApprovalRequests,
  getCommuter,
  respondCommuterApprovalRequest,
  getCommuterApprovalRequirements,
};
