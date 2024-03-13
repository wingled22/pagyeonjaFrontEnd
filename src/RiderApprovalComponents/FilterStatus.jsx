import React from "react";
import { Button } from "reactstrap";


const FilterStatus = () => {


  const buttonStyle = {

    
     /* top right bottom left */
    margin: "5px 0px 0px 20px",
    height: "40px",
    width: "150px",
    backgroundColor: "#52459F",
    border: "1px solid #ccc",
    color: "white",
    fontWeight: "bold",
    borderRadius: "22px",
    fontFamily: "'Poppins', sans-serif",
   
  };

  return (
    <>

    
    <Button style={buttonStyle}>
    Filter by status
  </Button>

  </>
  )
 
};

export default FilterStatus;
