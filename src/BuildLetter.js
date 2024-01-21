// In your BuildLetter.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const BuildLetter = () => {
  const location = useLocation();
  const { dataList } = location.state || {};

  return (
    <div>
      <h2>Build Your Letter</h2>
      <ul>
        {dataList && dataList.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
      {/* Additional code to build the letter */}
    </div>
  );
};

export default BuildLetter;
