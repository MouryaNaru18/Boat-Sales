import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product9 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹999',
    'Price_June08': '₹999'
  });

  return (
    <div>
      <h2>boAt Rockerz 103 V2 Pro</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product9;
