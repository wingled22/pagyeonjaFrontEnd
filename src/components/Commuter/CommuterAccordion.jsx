import React, { useState, useEffect } from "react";
import { Accordion } from "reactstrap";
import CommuterAccordionList from "../../components/Commuter/CommuterAccordionList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCommuterRideHistory } from "../../utils/commuter/approvedCommuterSlice.js";

const CommuterAccordion = ({ selectedCommuter }) => {
  const [commuterRideInfo, setCommuterRideInfo] = useState([]);
  const [open, setOpen] = useState("0");
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.approvedCommuters);

  const toggle = (id) => {
    if (open === id) {
      setOpen("0");
    } else {
      setOpen(id);
    }
  };

  const getRideHistory = async () => {
    const { payload } = await dispatch(
      getCommuterRideHistory(selectedCommuter)
    );
    if (isSuccess) {
      setCommuterRideInfo(payload);
    }
  };

  useEffect(() => {
    // Assuming you have a commuterId stored somewhere in your ride history data
    if (selectedCommuter.length > 0) {
      const commuterId = selectedCommuter[0].commuterId; // Get the commuterId from the first ride history object
      getRideHistory(commuterId);
    }
  }, [selectedCommuter]);

  return (
    <>
      <Accordion flush open={open} toggle={toggle} id="accordionContainer">
        {commuterRideInfo.length === 0 && <center>No ride history</center>}
        {commuterRideInfo.map((item) => (
          <CommuterAccordionList key={item.rideHistoryId} item={item} />
        ))}
      </Accordion>
    </>
  );
};

export default CommuterAccordion;
