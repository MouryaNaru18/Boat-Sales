import React, { useState } from 'react';
import PriceChart from './PriceChart';

const Product5 = () => {
  // Sample data for testing
  const [data, setData] = useState({
    'Price_June07': '₹4,499',
    'Price_June08': '₹4,499',
    'Price_June09': '₹4,499',
    'Price_June10': '₹4,499',
    'Price_June11': '₹4,499',
    'Price_June12': '₹4,499'
  });

  return (
    <div>
      <h2>boAt Nirvanaa 751 ANC</h2>
      <PriceChart data={data} />
    </div>
  );
};

export default Product5;
