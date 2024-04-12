import { useState } from "react";
import "../../assets/css/CommuterSearch.css";

const CommuterSearch = ({ getSearchCommuter }) => {

  const [searchCommuter, setSearchCommuter] = useState("");
  const callSearchCommuter = (search) => {
    setSearchCommuter(search);
    getSearchCommuter(search);
  }

  return (
    <>
      <input
        type="text"
        className="commuterSearchContainer form-control"
        placeholder="Search name"
        value={searchCommuter}
        onChange={(e) => {
          callSearchCommuter(e.target.value);
        }}
      />
    </>
  );
};

export default CommuterSearch;
