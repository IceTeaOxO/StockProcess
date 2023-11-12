// List.js

import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list-disc pl-4">
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  );
};

export default List;
