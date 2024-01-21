// LetterContent.js

import React from 'react';

const LetterContent = React.forwardRef(({ data }, ref) => {
  return (
    <div ref={ref}>
      <h2>Dear {data.recipientName},</h2>
      <p>{data.content}</p>
      <p>Sincerely,</p>
      <p>Your Name</p>
    </div>
  );
});

export default LetterContent;
