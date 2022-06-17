import React from 'react';

const NoshenHeader = ({ title, createdAt }) => {
  return (
    <>
      <h3 className="noshen-item__title">{title}</h3>
      <p className="noshen-item__date">{createdAt}</p>
    </>
  );
}

export default NoshenHeader;
