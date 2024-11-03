import React, { useState } from 'react';

const ReadMore = ({ children, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const text = children;

  return (
    <div>
      {isExpanded ? text : text.slice(0, maxLength)}
      {text.length > maxLength && (
        <button onClick={toggleReadMore} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;