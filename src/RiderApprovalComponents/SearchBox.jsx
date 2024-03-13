
import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: #D9D9D9;
  margin-left: 20px;
  margin-top: 5px;
  width: 300px;
  height:39px;

  
`;


const SearchBar = () => {
  return (
    <StyledInput
      type="text"
      placeholder="Search"
      className='SearchBox'
    />
  );
};

export default SearchBar;
