import axios from "axios";

const getRidersApproved = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/RiderRegistration/GetRidersApproved"
  );
  return res.data;
};

const updateRidersApproved = async (formData) => {
  const response = await axios.put(
    `http://localhost:5180/api/RiderRegistration/UpdateRider`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const riderService = {
  getRidersApproved,
  updateRidersApproved,
};
