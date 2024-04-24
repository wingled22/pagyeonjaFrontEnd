import axios from "axios";

const getCommutersApproved = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/CommuterRegistration/GetCommutersApproved"
  );
  return res.data;
};

export const commuterService = {
  getCommutersApproved,
};
