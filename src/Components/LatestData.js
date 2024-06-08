// src/Components/LatestData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestData = () => {
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    fetchLatestData();
  }, []);

  const fetchLatestData = () => {
    axios.get('/get_latest_data')
      .then(response => {
        setLatestData(response.data);
      })
      .catch(error => {
        console.error('Error fetching latest data:', error);
      });
  };

  return (
    <div>
      <h1>Latest Data</h1>
      {latestData && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
              {/* Include additional columns if needed */}
            </tr>
          </thead>
          <tbody>
            {latestData.map((item, index) => (
              <tr key={index}>
                <td>{item.Title}</td>
                <td>{item.Price}</td>
                <td>{item.Rating}</td>
                {/* Include additional columns if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LatestData;
