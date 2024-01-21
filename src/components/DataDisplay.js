// DataDisplay.js
/*
import React from 'react';

const DataDisplay = ({ displayedData }) => {
  return (
    <div>
      <h2>Head CTC/KIDS, Karunya Institute of Technology and Sciences.

The Chief Warden (Boys Hostel), Karunya Institute of Technology and Science, Coimbatore-641114

Subject

Re: Permission for late residence entry

Respected Sir,

The following students were working late at CTC on 07-11-2023 Till 7:30PM Kindly permit them to enter the hostel.</h2>
      <p>Entered Data: {displayedData}</p>
    </div>
  );
};

export default DataDisplay;*/

// DataDisplay.js
/*
import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [displayedData, setDisplayedData] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('enteredData');
    if (storedData) {
      setDisplayedData(storedData);
    }
  }, []);

  return (
    <div>
      <h2>Data Display</h2>
      <p>Entered Data: {displayedData}</p>
    </div>
  );
};

export default DataDisplay;
*/

// DataDisplay.js

import React from 'react';

const DataDisplay = ({ data }) => {
  return (
    <div>
      <h2>Data Display</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;

