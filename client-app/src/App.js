import React, { useState, useEffect } from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import styled from "styled-components";
import Weather from "./components/Weather";

const StyledCurrentWeather = styled.h2`
  margin: 20px;
  font-size: 28px;
  color: #333;
  font-weight: 500;
`;
const StyledInput = styled.select`
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
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledOption = styled.option`
  font-size: 16px;
`;

function App() {
  const [weather, setWeather] = useState(null);
  const [cityList, setCityList] = useState([]);
  const [myId, setMyId] = useState(null);

  const getCityList = () => {
    fetch("/api/cities")
      .then((res) => res.json())
      .then((res) => {
        setCityList(res);
      });
  };

  const getWeather = (city) => {
    fetch(`/api/weather/${city}`)
      .then((res) => res.json())
      .then((weather) => {
        setWeather(weather);
      });
  };
  const handleRemoveCity = (id) => {
    fetch(`/api/cities/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(cityList.filter((city) => city.id !== id));
        console.log(myId);
        setCityList(cityList.filter((city) => city.id !== id));
      });
  };

  const handleChangeCity = (e) => {
    const x = document.querySelector(`.${e.target.value}`).id;
    setMyId(x);
    getWeather(e.target.value);
  };

  useEffect(() => {
    getCityList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <LandingPage getCityList={getCityList} />
      <StyledWrapper>
        <StyledCurrentWeather>Current Weather</StyledCurrentWeather>
        <StyledInput type="select" onChange={handleChangeCity}>
          {cityList.length === 0 ? (
            <StyledOption>No cities added yet</StyledOption>
          ) : (
            <StyledOption>Select a city</StyledOption>
          )}
          {cityList.map((city) => (
            <StyledOption id={city.id} key={city.id} className={city.city_name}>
              {city.city_name}
            </StyledOption>
          ))}
        </StyledInput>
        <Weather
          data={weather}
          handleRemoveCity={handleRemoveCity}
          myId={myId}
        />
      </StyledWrapper>
    </>
  );
}

export default App;
