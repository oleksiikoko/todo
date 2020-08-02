import React from "react";

import "styles/Popup.scss";

const DeletePopup: React.FC<{
  name: string;
  onConfirm: () => void;
  onCancel: () => void;
  themeMode: string;
}> = ({ name, onConfirm, onCancel, themeMode }) => {
  const onConfirmClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onConfirm();
  };

  const onCanceleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onCancel();
  };

  return (
    <div
      data-testid="delete-popup"
      className="popup__container"
      onClick={onCanceleClick}
    >
      <div data-testid="popup" className={`popup ${themeMode}`}>
        <p className="popup__title">Delete task:</p>
        <p className="popup__text">{name}</p>
        <button className={themeMode} onClick={onConfirmClick}>
          Confirm
        </button>
        <button className={themeMode} onClick={onCanceleClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;
