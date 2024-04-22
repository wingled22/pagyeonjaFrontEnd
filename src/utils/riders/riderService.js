import axios from "axios";

const getRidersApproved = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/RiderRegistration/GetRidersApproved"
  );
  return res.data;
};

export const riderService = {
  getRidersApproved,
};
