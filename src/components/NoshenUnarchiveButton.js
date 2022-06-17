import React from 'react';

const NoshenUnarchiveButton = ({ id, onUnarchive }) => {
  return <button className='noshen-item__archive-button' onClick={() => onUnarchive(id)}>Unarchive</button>
}

export default NoshenUnarchiveButton;
