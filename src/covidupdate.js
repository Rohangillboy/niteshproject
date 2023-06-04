import React, { useEffect, useState } from 'react';
import './covid.css'
const CovidUpdates = () => {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.covid19api.com/summary');
        const data = await response.json();
        setCovidData(data);
      } catch (error) {
        console.error('Error fetching COVID-19 data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch data every minute

    return () => clearInterval(interval);
  }, []);

  if (!covidData) {
    return <div>Loading...</div>;
  }

  const { Global: globalData } = covidData;

  return (
    <div className="covid-updates-container">
      <h2 className="title">COVID-19 Global Updates</h2>
      <div className="stat-container">
        <div className="stat-card">
          <p className="stat-label">New Confirmed Cases:</p>
          <p className="stat-value">{globalData.NewConfirmed}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Confirmed Cases:</p>
          <p className="stat-value">{globalData.TotalConfirmed}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">New Deaths:</p>
          <p className="stat-value">{globalData.NewDeaths}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Deaths:</p>
          <p className="stat-value">{globalData.TotalDeaths}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">New Recovered:</p>
          <p className="stat-value">{globalData.NewRecovered}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Recovered:</p>
          <p className="stat-value">{globalData.TotalRecovered}</p>
        </div>
      </div>
    </div>
  );
};

export default CovidUpdates;
