import axios from "axios";

const getRidersApproved = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/RiderRegistration/GetRidersApproved"
  );
  return res.data;
};

const updateRidersApproved = async (formData) => {
  const res = await axios.put(
    `http://localhost:5180/api/RiderRegistration/UpdateRider`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const getRiderSuspension = async (riderId) => {
  const res = await axios.get(
    `http://localhost:5180/api/Suspension/GetSuspension?userid=${riderId}&usertype=Rider`
  );
  return res.data;
};

const addRiderSuspension = async (formData) => {
  const res = await axios.post(
    "http://localhost:5180/api/Suspension/RegisterSuspension",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const updateRiderSuspension = async (updateFormData, suspensionId) => {
  const res = await axios.put(
    "http://localhost:5180/api/Suspension/UpdateSuspension?id=" + suspensionId,
    updateFormData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const revokeRiderSuspension = async (formData) => {
  const res = await axios.put(
    "http://localhost:5180/api/Suspension/RevokeSuspension",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const getApprovedRiderDocuments = async (riderId) => {
  const res = await axios.get(
    `http://localhost:5180/api/document/getdocuments?id=${riderId}&usertype=Rider`
  );
  return res.data;
};

const getTopUpHistory = async (riderId) => {
  const res = await axios.get(
    `http://localhost:5180/api/TopupHistory/GetRiderTopupHistory?id=${riderId}`
  );
  return res.data;
};

export const riderService = {
  getRidersApproved,
  updateRidersApproved,
  getRiderSuspension,
  addRiderSuspension,
  updateRiderSuspension,
  revokeRiderSuspension,
  getTopUpHistory,
  getApprovedRiderDocuments,
};
