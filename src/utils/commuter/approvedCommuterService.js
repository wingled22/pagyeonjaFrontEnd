import axios from "axios";

const getCommutersApproved = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/CommuterRegistration/GetCommutersApproved"
  );
  return res.data;
};

const updateApprovedCommuters = async (formDatas) => {
  const res = await axios.put(
    "http://localhost:5180/api/CommuterRegistration/UpdateCommuter",
    formDatas,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const addCommuterSuspension = async (formData) => {
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

const updateCommuterSuspension = async (updateFormData) => {
  const res = await axios.put(
    "http://localhost:5180/api/Suspension/UpdateSuspension",
    updateFormData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

const revokeCommuterSuspension = async (formData) => {
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

export const commuterService = {
  getCommutersApproved,
  updateApprovedCommuters,
  addCommuterSuspension,
  updateCommuterSuspension,
  revokeCommuterSuspension,
};
