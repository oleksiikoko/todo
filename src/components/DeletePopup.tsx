import React from "react";

import "../styles/Popup.scss";

const DeletePopup: React.FC<{
  name: string;
  onConfirm: Function;
  onCancel: Function;
}> = ({ name, onConfirm, onCancel }) => {
  return (
    <div className="popup__container" onClick={() => onCancel()}>
      <div className={`popup ${localStorage.getItem("Theme")}-mode`}>
        <p className={`popup__title ${localStorage.getItem("Theme")}-mode`}>
          Delete task:
        </p>
        <p className={`popup__text ${localStorage.getItem("Theme")}-mode`}>
          {name}
        </p>
        <button
          className={`${localStorage.getItem("Theme")}-mode`}
          onClick={() => onConfirm()}
        >
          Confirm
        </button>
        <button
          className={`${localStorage.getItem("Theme")}-mode`}
          onClick={() => onCancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;
