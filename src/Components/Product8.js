import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product8 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹1,399',
    'Price_June08': '₹1,399'
  });

  return (
    <div>
      <h2>boAt Rockerz 195V2 Pro</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product8;
