import React from 'react';

const NoshenArchiveButton = ({ id, onArchive }) => {
  return <button className='noshen-item__archive-button' onClick={() => onArchive(id)}>Archive</button>
}

export default NoshenArchiveButton;
