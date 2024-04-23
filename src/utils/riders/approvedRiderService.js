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

export const getRiderSuspension = async (riderId) => {
  const res = await axios.get(
    `http://localhost:5180/api/Suspension/GetSuspension?userid=${riderId}&usertype=Rider`
  );
  return res.data;
};

export const addRiderSuspension = async (formData) => {
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

export const updateRiderSuspension = async (updateFormData, suspensionId) => {
  const res = axios.put(
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

export const riderService = {
  getRidersApproved,
  updateRidersApproved,
  getRiderSuspension,
  addRiderSuspension,
  updateRiderSuspension,
};
