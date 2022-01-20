import "./Styles/App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import GlobePage from "./Pages/GlobePage";
import QuizPage from "./Pages/QuizPage";
import CountriesPage from "./Pages/CountriesPage";
import Country from "./Components/Country";
import { filterRegionsData } from "./Data_Logic/functions";

const COUNTRY_API_URL =
  "https://restcountries.com/v3/all?fields=name,subregion,flags,currencies";

function App() {
  const [status, setStatus] = useState("App initialised!");
  const [fullData, setFullData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [current, setCurrent] = useState({
    country: "",

  });
  console.log("current state: ", current);

  useEffect(() => {
    setStatus("API data fetch pending..");
    fetch(COUNTRY_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setFullData(data);
        setStatus("API data received");
      })
      .catch(() => setStatus("No API data received"));
  }, []);

  useEffect(() => {
    if (status !== "API data fetch pending..") {
      const availableRegions = filterRegionsData(fullData); //! why can't i put this outside of useEffect?
      setRegions(availableRegions);
    }
  }, [status])



  

  return (
    <div className="App">
      <NavigationBar status={status} />
      <Routes>
        {/* <Route path="/" element={<NavigationBar status={status} />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="/regions"
            element={<GlobePage data={fullData} regions={regions} current={current} setCurrent={setCurrent} />}
          ></Route>
                    <Route
            path="/regions/:regionName/countries"
            element={<CountriesPage data={fullData} current={current} />}
          ></Route>
          <Route
            path="/regions/:regionName/:countryname"
            element={<QuizPage data={fullData} current={current} setCurrent={setCurrent} />}
          ></Route>
          <Route
            path="/:regionName/:countryName"
            element={<Country current={current} />}
          />
          
        {/* </Route> */}

        {/* <Route path="" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
