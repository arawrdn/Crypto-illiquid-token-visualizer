import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent.jsx';
import FilterComponent from './components/FilterComponent.jsx';
import sampleData from './data/sample.json';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ start: '', end: '' });

  useEffect(() => {
    setData(sampleData);
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = data.filter(d => {
    const date = new Date(d.timestamp);
    const start = filter.start ? new Date(filter.start) : null;
    const end = filter.end ? new Date(filter.end) : null;
    return (!start || date >= start) && (!end || date <= end);
  });

  return (
    <div className="container">
      <h1>Crypto Illiquid Token Visualizer</h1>
      <FilterComponent filter={filter} onChange={handleFilterChange} />
      <ChartComponent data={filteredData} />
    </div>
  );
}

export default App;
