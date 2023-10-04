import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import Infobox from "./Infobox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { prettyPrintStat, sortData } from "./util";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  // UseEffect = Runs a piece of code based on a given condiotion when component loads
  useEffect(() => {
    // contains all the world wide data as the app starts
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    // The code inside here runs once
    // When the component loads and not again
    // async -> send request, wait for it and do something of input

    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    // https://disease.sh/v3/covid-19/countries/all
    // https://disease.sh/v3/covid-19/countries/[countryCode]
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };


  
  return (
      <div className="app">
        <div className="app__left">
          <div className="app__header">
            <h1>COVID-19 Tracker</h1>
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                {/**
                <MenuItem value="worldwide">WorldWide</MenuItem>
                <MenuItem value="worldwide">Option Two</MenuItem>
                <MenuItem value="worldwide">Option Three</MenuItem>
                <MenuItem value="worldwide">Options</MenuItem>
              */}
              {/**
                Looping through all the country from a list
              */}
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="app__stats">
            <Infobox 
              isRed
              onClick = {e => setCasesType('cases')}
              active={casesType === "cases"}
              title="Coronavirus Cases" 
              total={prettyPrintStat(countryInfo.cases)} 
              cases={prettyPrintStat(countryInfo.todayCases)}
                />
              <Infobox  
                onClick = {e => setCasesType('recovered')}  
                active={casesType === "recovered"}           
                title="Recovered" 
                total={prettyPrintStat(countryInfo.recovered)} 
                cases={prettyPrintStat(countryInfo.todayRecovered)}
                  />
              <Infobox  
                isRed
                onClick = {e => setCasesType('deaths')}
                active={casesType === "deaths"}
                title="Deaths" 
                total={prettyPrintStat(countryInfo.deaths)}  
                cases={prettyPrintStat(countryInfo.todayDeaths)}
                  />
          </div>
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className="app__right">
          <CardContent>
            <div className="app__information">
              <h3>Live Cases by Country</h3>
              <Table countries={tableData} />
              <h3 className="gra">Worldwide new {casesType}</h3>
              <LineGraph className="app__graph" casesType={casesType} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

export default App;
