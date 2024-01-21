// In your FormComponent.js or wherever you want to create the form

/*import React, { useState } from 'react';

const FormComponent = () => {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList((prevDataList) => [...prevDataList, inputData]);
    setInputData('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Data:
          <input type="text" value={inputData} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Data</button>
      </form>

      <ul>
        {dataList.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;*/


// In your FormComponent.js

// In your FormComponent.js or wherever you want to create the form

import React, { useState } from 'react';

const FormComponent = () => {
  const [inputData, setInputData] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList((prevDataList) => [...prevDataList, inputData]);
    setInputData('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Data:
          <input type="text" value={inputData} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Data</button>
      </form>

      <ul>
        {dataList.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
