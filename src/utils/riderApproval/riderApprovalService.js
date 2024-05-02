import axios from "axios";

const getRiderApprovalRequests = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/Approval/GetApprovals?userType=Rider"
  );
  return res.data;
};

const getRider = async (userId) => {
  const res = await axios.get(
    `http://localhost:5180/api/riderregistration/getrider?id=${userId}`
  );
  return res.data;
};

const respondRiderApprovalRequest = async (
  userId,
  approvalResponse,
  rejectionMessage
) => {
  const res = await axios.put(
    `http://localhost:5180/api/Approval/UserApprovalResponse?usertype=Rider&userid=${userId}&response=${approvalResponse}&rejectionmessage=${rejectionMessage}`
  );
  return res.data;
};

const getRiderApprovalRequirements = async (userId) => {
  const res = await axios.get(
    `http://localhost:5180/api/document/getdocuments?id=${userId}&usertype=Rider`
  );
  return res.data;
};

export const riderApprovalService = {
  getRiderApprovalRequests,
  getRider,
  respondRiderApprovalRequest,
  getRiderApprovalRequirements,
};
