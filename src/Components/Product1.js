import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product1 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'June07': '₹3,299',
    'June08': '₹3,299'
  });

  return (
    <div>
      <h2>boAt Rockerz 551ANC</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product1;
