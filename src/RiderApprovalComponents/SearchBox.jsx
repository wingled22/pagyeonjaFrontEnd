import React from "react";


const StyledInput = {
backgroundColor: '#d1d1d1',
height: '45px' ,
marginLeft: '15px' ,
marginTop:' 5px',
marginBottom: '10px',
width: '500px',
borderRadius: '130px',

paddingLeft: '25px',
}

const SearchBar = () => {
  return (
    <>
      <input style={StyledInput}
        type="text"
        className="form-control"
        placeholder="Search name"
      />
    </>
  );
};

export default SearchBar;
