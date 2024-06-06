import React, { useEffect } from 'react';

const BackgroundChanger = ({ count }) => {
  useEffect(() => {
    if (count >= 10 && count <= 1999) {
      document.body.style.backgroundColor = 'lightblue';
    } else if (count >= 1000 && count <= 1999) {
      document.body.style.backgroundColor = 'lightgreen';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [count]);

  return null; // This component doesn't render anything itself
};

export default BackgroundChanger;

