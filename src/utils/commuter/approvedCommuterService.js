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

export const commuterService = {
  getCommutersApproved,
  updateApprovedCommuters,
};
