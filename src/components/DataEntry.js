// DataEntry.js
/*
import React, { useState } from 'react';

const DataEntry = ({ onDataEntered }) => {
  const [enteredData, setEnteredData] = useState('');

  const handleInputChange = (e) => {
    setEnteredData(e.target.value);
  };

  const handleDataSubmit = () => {
    onDataEntered(enteredData);
    setEnteredData(''); // Clear the input after submitting
  };

  return (
    <div>
      <h2>Data Entry</h2>
      <input
        type="text"
        value={enteredData}
        onChange={handleInputChange}
        placeholder="Enter data..."
      />
      <button onClick={handleDataSubmit}>Submit Data</button>
    </div>
  );
};

export default DataEntry;*/

// DataEntry.js


// DataEntry.js
/*
import React, { useState } from 'react';

const DataEntry = () => {
  const [enteredData, setEnteredData] = useState('');

  const handleInputChange = (e) => {
    setEnteredData(e.target.value);
  };

  const handleDataSubmit = () => {
    const newTab = window.open('', '_blank');
    newTab.document.write(`
      <html>
        <head>
          <title>New Tab</title>
        </head>
        <body>
          <h2>Data Display</h2>
          <p>Entered Data: ${enteredData}</p>
        </body>
      </html>
    `);
  };

  return (
    <div>
      <h2>Data Entry</h2>
      <input
        type="text"
        value={enteredData}
        onChange={handleInputChange}
        placeholder="Enter data..."
      />
      <button onClick={handleDataSubmit}>Submit Data</button>
    </div>
  );
};

export default DataEntry;*/

// DataEntry.js

import React, { useState } from 'react';

const DataEntry = ({ onDataSubmitted }) => {
  const [enteredData, setEnteredData] = useState('');

  const handleInputChange = (e) => {
    setEnteredData(e.target.value);
  };

  const handleDataSubmit = () => {
    onDataSubmitted(enteredData);
    setEnteredData('');
  };

  return (
    <div>
      <h2>Data Entry</h2>
      <input
        type="text"
        value={enteredData}
        onChange={handleInputChange}
        placeholder="Enter data..."
      />
      <button onClick={handleDataSubmit}>Submit Data</button>
    </div>
  );
};

export default DataEntry;

