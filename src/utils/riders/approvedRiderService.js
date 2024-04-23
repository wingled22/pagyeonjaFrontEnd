import axios from "axios";

const getRidersApproved = async () => {
  const res = await axios.get(
    "http://localhost:5180/api/RiderRegistration/GetRidersApproved"
  );
  return res.data;
};

const updateRidersApproved = async (formData) => {
  await axios.put(
    `http://localhost:5180/api/RiderRegistration/UpdateRider`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getRiderSuspension = async (riderId) => {
  const res = await axios.get(
    `http://localhost:5180/api/Suspension/GetSuspension?userid=${riderId}&usertype=Rider`
  );
  return res.data;
};

export const riderService = {
  getRidersApproved,
  updateRidersApproved,
  getRiderSuspension,
};
