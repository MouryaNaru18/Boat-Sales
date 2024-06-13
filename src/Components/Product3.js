import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product3 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹499',
    'Price_June08': '₹499',
    'Price_June09': '₹499',
    'Price_June10': '₹499',
    'Price_June11': '₹499',
    'Price_June12': '₹499',
    'Price_June13': '₹499'
  });

  return (
    <div>
      <h2>boAt Bassheads 102</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product3;
