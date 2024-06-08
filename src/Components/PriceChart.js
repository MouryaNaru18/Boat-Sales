import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PriceChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      // Destroy existing chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const dates = Object.keys(data).filter(key => key.startsWith('Price_June'));
      const prices = dates.map(date => {
        const price = data[date].replace('₹', '').replace(/,/g, ''); // Remove currency symbol and commas
        return parseFloat(price);
      });

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Price',
            data: prices,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: 'Price (in ₹)'
              }
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PriceChart;
