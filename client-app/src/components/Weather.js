import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
  margin: 20px 0;
  border: solid 1px #c8c8c8;
  padding: 15px;
  border-radius: 4px;
  text-align: left;
`;
const StyledHeader = styled.div`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const StyledSpan = styled.span`
  margin-left: 5px;
`;
const StyledTitle = styled.h2`
  text-align: center;
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
const Weather = ({ data, handleRemoveCity, myId, text }) => {
  if (!data)
    return (
      <div style={{ textAlign: "center" }}>
        <p>{text}</p>
        {text !== "" && (
          <StyledButton onClick={() => handleRemoveCity(myId)}>
            Remove
          </StyledButton>
        )}
      </div>
    );
  return (
    <>
      <StyledWrapper>
        <StyledTitle>{data.name}</StyledTitle>
        <StyledHeader>
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="weather icon"
          />
          <StyledSpan>{data.weather[0].main}</StyledSpan>&nbsp;
          <StyledSpan>
            {Math.floor((data.main.temp - 32) * (5 / 9))}&deg;C
          </StyledSpan>
        </StyledHeader>
        <StyledGrid>
          <p>Wind</p>
          <p>{Math.floor(data.wind.speed)} km/h</p>
          <p>Pressure</p>
          <p>{Math.floor(data.main.pressure)} hPa</p>

          <p>Humidity</p>
          <p>{Math.floor(data.main.humidity)}%</p>

          <p>Min Temp</p>
          <p>{Math.floor((data.main.temp_min - 32) * (5 / 9))}&deg;C</p>

          <p>Max Temp</p>
          <p>{Math.floor((data.main.temp_max - 32) * (5 / 9))}&deg;C</p>
        </StyledGrid>

        <StyledButton onClick={() => handleRemoveCity(myId)}>
          Remove
        </StyledButton>
      </StyledWrapper>
    </>
  );
};

export default Weather;
