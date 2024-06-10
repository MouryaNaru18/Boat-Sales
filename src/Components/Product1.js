import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product1 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹3,299',
    'Price_June08': '₹3,299',
    'Price_June09': '₹3,299',
    'Price_June10': '₹3,299'

  });

  return (
    <div>
      <h2>boAt Rockerz 551ANC</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product1;


