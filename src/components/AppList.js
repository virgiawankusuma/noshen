import React from 'react';

import AppItem from './AppItem';

const AppList = ({ notes, onDelete }) => {
  return (
    <div className="noshen-list">
      {
        notes.map(note => ( // map through the notes array
          <AppItem 
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          {...note} /> // spread the note object into the AppItem component
        ))
      }
    </div>
  );
};

export default AppList;
