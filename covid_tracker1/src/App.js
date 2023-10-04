import React, { useEffect, useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent
} from '@material-ui/core';

import Infobox from "./Infobox";
import Map from "./Map";
import Table from "./Table";
import LineGraph from "./LineGraph";
import { sortData } from "./util"
import './App.css';


function App() {
  //State of the variables
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldWide');
  const [tableData, setTableData] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});


  // UseEffect = Runs a piece of code based on a given condiotion when component loads
  useEffect(() => {
    // contains all the world wide data as the app starts

    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then((data) => {
      setCountryInfo(data);
    })
  }, [])  
  
  useEffect(() => {
    // The code inside here runs once
    // When the component loads and not again
    // async -> send request, wait for it and do something of input

    const getCountriesData = async() => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        
        const sortedData = sortData(data);

        setTableData(sortedData);
        setCountries(countries);
      });
    }
    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    // https://disease.sh/v3/covid-19/countries/all
    // https://disease.sh/v3/covid-19/countries/[countryCode]
    const url = countryCode === 'worldWide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch (url)
    .then(response => response.json())
    .then(data => {
        setCountry(countryCode)
        // All data for the country
        setCountryInfo(data)
    })
  }
  console.log(countryInfo)

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid 19 Tracker</h1>
            <FormControl className="app__dropdown">
              <Select
                variant="outlined"
                onChange={onCountryChange}
                value={country}
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
              <MenuItem value="worldWide">World Wide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
              </Select>
            </FormControl>  
        </div>
        <div className="app__stats">
              <Infobox title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases}/>
              <Infobox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered}/>
              <Infobox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths}/>
        </div>

        <Map />
      </div>
        
      <Card className="app__right">
        <CardContent>
              <h3>Live Cases By country</h3>
              <Table countries={tableData} />
              <h3>World Wide New Country</h3>
              <LineGraph></LineGraph>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
