import React, { useState } from "react";
import styled from "styled-components";
import cloud from "../assets/cloud.svg";
import snow from "../assets/snow.svg";
import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c8c8c8;
`;

const StyledTitle = styled.p`
  font-size: 44px;
  color: #333;
  margin: 20px;
`;
const StyledText = styled.p`
  font-size: 18px;
  color: #333;
`;
const StyledInput = styled.input`
  width: 300px;
  outline: none;
  display: block;
  background: #f2f1f1;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: #333;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
  margin: 10px;
`;
const StyledButton = styled.button`
  outline: none;
  background: #333;
  width: 150px;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: white;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
`;
const StyledBar = styled.div`
  display: inline-flex;
  align-items: center;
`;
const LandingPage = ({ getCityList }) => {
  const [newCityName, setNewCityName] = useState("");
  const handleInputChange = async (e) => {
    setNewCityName(e.target.value);
  };
  const handleAddCity = () => {
    fetch("/api/cities", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ city: newCityName }),
    })
      .then((res) => res.json())
      .then((res) => {
        getCityList();
        setNewCityName("");
      });
  };

  return (
    <>
      <StyledWrapper>
        <StyledTitle>Weather App</StyledTitle>
        <StyledText>Enter the city and I will show you the weather</StyledText>
        <StyledBar>
          <StyledInput
            placeholder="Enter the city..."
            value={newCityName}
            onChange={handleInputChange}
          />
          <StyledButton onClick={handleAddCity}>Add City</StyledButton>
        </StyledBar>
      </StyledWrapper>
    </>
  );
};

export default LandingPage;
