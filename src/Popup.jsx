import React from 'react';
import './Popup.css'; 

const Popup = ({ message }) => {
  return (
    <div className="pop-up">
      <p>{message}</p>
    </div>
  );
};

export default Popup;



