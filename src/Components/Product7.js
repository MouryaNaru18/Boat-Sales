import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product7 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹499',
    'Price_June08': '₹499',
    'Price_June09': '₹499',
    'Price_June10': '₹499'
  });

  return (
    <div>
      <h2>boAt Bassheads 220</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product7;
