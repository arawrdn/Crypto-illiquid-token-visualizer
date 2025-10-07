import React from 'react';

function FilterComponent({ filter, onChange }) {
  const handleChange = (e) => {
    onChange({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label>Start Date: <input type="date" name="start" value={filter.start} onChange={handleChange} /></label>
      <label>End Date: <input type="date" name="end" value={filter.end} onChange={handleChange} /></label>
    </div>
  );
}

export default FilterComponent;
