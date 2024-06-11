import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product6 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹399',
    'Price_June08': '₹399',
    'Price_June09': '₹399',
    'Price_June10': '₹399',
    'Price_June11': '₹399'
  });

  return (
    <div>
      <h2>boAt Bassheads 100</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product6;
