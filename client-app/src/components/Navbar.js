import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledLink to="/">
        <StyledTitle>Weather App</StyledTitle>
      </StyledLink>
    </StyledWrapper>
  );
};

export default Navbar;
