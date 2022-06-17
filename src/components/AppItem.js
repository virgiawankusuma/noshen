import React from 'react';

import NoshenHeader from './NoshenHeader';
import NoshenBody from './NoshenBody';
import NoshenDeleteButton from './NoshenDeleteButton';
import NoshenArchiveButton from './NoshenArchiveButton';

const NoshenItem = ({ id, title, body, createdAt, onDelete, onArchive }) => {
  return (
    <div className="noshen-item">
      <div className="noshen-item__content">
        <NoshenHeader title={title} createdAt={createdAt} />
        <NoshenBody body={body} />
      </div>
      <div className="noshen-item__action">
        <NoshenDeleteButton id={id} onDelete={onDelete} />
        <NoshenArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoshenItem;
