import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setApiData,
  setLat,
  setLong,
  setSearch,
} from "../features/user/weatherSlice";
const Weather = () => {
  const { apiData } = useSelector((state) => state.weatherDetail);
  const { Lat } = useSelector((state) => state.weatherDetail);
  const { Long } = useSelector((state) => state.weatherDetail);
  const { Search } = useSelector((state) => state.weatherDetail);

  
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=96fb85c46e8b2e658246b55253175fd3&units=metric`
        //`https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=96fb85c46e8b2e658246b55253175fd3&units=metric`
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        dispatch(setApiData(data));
      }
    };
    fetchData();
  }, [Search]);
  navigator.geolocation.getCurrentPosition(function (position) {
    dispatch(setLat(position.coords.latitude));
    dispatch(setLong(position.coords.longitude));
  });
  useEffect(() => {
    const fetchData = async () => {
      console.log("Latitude is:", Lat);
      console.log("Longitude is:", Long);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&units=metric&appid=96fb85c46e8b2e658246b55253175fd3`

      );
      const data = await res.json();

      if (res.ok) {
        dispatch(setApiData(data));
      }
    };
    fetchData();
  }, [Long, Lat]);

  return (
    <div className="container">
      <div className="weatherbg">
        <h1 className="heading">Weather </h1>
        <div className="searching">
          <input
            type="text"
            placeholder="Enter your city/town"
            name="search"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            value={Search}
          />
        </div>
      </div>
      <div className="result">
  
        <div className="result-card">
          <img className="weatherIcon" src={"icon.png"} alt="weather" />
          {apiData ? (
            <div className="element">
              {/* <img
                src={
                  "http://openweathermap.org/img/w/" +
                  apiData.weather[0].icon +
                  ".png"
                }
                alt="weather"
              /> */}
              <p>
                <span>Tempreture : </span>
                <h3>{apiData.main.temp} &#8451;</h3>
              </p>

              <p>
                <span>Name : </span>
                {apiData.name}
              </p>
              <p>
                <span>Country : </span>
                {apiData.sys.country}
              </p>
              <p>
                <span> Humidity : </span>
                {apiData.main.humidity}
              </p>
            </div>
          ) : (
            <h2>Data not found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
