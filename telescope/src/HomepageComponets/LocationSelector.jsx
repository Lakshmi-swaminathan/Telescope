import React, { useState } from 'react';
import tele from '../images/tele_pic.jpeg';

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
  ];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>

      <select
        value={selectedLocation}
        onChange={handleLocationChange}
        className="location-dropdown"
      >
        <option value="" disabled>Select a location</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
        <option value="Current Location">Use Current Location</option>
      </select>
    </div>
  );
};

export default LocationSelector;
