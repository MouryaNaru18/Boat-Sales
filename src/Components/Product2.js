import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product2 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹1,599',
    'Price_June08': '₹1,599',
      'Price_June09': '₹1,599',
    'Price_June10': '₹1,599'

  });

  return (
    <div>
      <h2>boAt Rockerz 255 Pro+</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product2;

