import React from 'react';

const NoshenDeleteButton = ({ id, onDelete }) => {
  return <button className='noshen-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
}

export default NoshenDeleteButton;
