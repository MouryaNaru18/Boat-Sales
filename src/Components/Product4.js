import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product4 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹2,799',
    'Price_June08': '₹2,799',
    'Price_June09': '₹2,799',
    'Price_June10': '₹2,799',
    'Price_June11': '₹2,799',
    'Price_June12': '₹2,799',
    'Price_June13': '₹2,799'
  });

  return (
    <div>
      <h2>boAt Immortal 700</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product4;
