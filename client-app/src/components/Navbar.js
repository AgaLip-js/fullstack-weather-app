import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #333;
  margin: 0;
  padding: 0;
  display: flex;
    justify-content: flex-start;
    align-items: center;
}
  
`;
const StyledTitle = styled.h2`
  font-size: 22px;
  color: white;
  padding: 20px;
`;
const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Weather App</StyledTitle>
    </StyledWrapper>
  );
};

export default Navbar;
