import React from "react";

import "../styles/Popup.scss";

const DeletePopup: React.FC<{
  name: string;
  onConfirm: Function;
  onCancel: Function;
  themeMode: string;
}> = ({ name, onConfirm, onCancel, themeMode }) => {
  return (
    <div id="popup" className="popup__container" onClick={() => onCancel()}>
      <div className={`popup ${themeMode}`}>
        <p className={`popup__title ${themeMode}`}>Delete task:</p>
        <p className={`popup__text ${themeMode}`}>{name}</p>
        <button className={`${themeMode}`} onClick={() => onConfirm()}>
          Confirm
        </button>
        <button className={`${themeMode}`} onClick={() => onCancel()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;
