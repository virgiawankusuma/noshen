import React from 'react';

import AppItem from './AppItem';

const AppList = ({ notes, onDelete, onArchive, onUnarchive }) => {
  return (
    <div className="noshen-list">
      {
        notes.map(note => (
          <AppItem 
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
          {...note} />
        ))
      }
    </div>
  );
};

export default AppList;
