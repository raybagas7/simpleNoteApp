import React from 'react';

const ButtonInfo = () => {
  return (
    <h3 className="info-button">
      <font className="delete-info">[X]</font> for Delete,{' '}
      <font className="edit-info">[E]</font> for Edit,{' '}
      <font className="checklist-info">
        [<span>&#10003;</span>]
      </font>{' '}
      for Archive,{' '}
      <font className="undo-info">
        [<span>&#9100;</span>]
      </font>{' '}
      for Undo Archive
    </h3>
  );
};

export default ButtonInfo;
