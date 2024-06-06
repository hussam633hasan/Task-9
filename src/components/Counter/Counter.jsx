import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  const handleClick = () => {
    if (count < 1000) {
      setCount(count + incrementAmount);
      if (count === 9 || count === 99 || count === 999) {
        setIncrementAmount(incrementAmount * 10);
      }
    } else if (count >= 1000 && count <= 1999) {
      setCount(count - 100);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      {count >= 10 && count <= 1999 && <PopUp message="Count reached a multiple!" />}
      {count >= 1000 && <ReduceButton />}
    </div>
  );
};

export default Counter;
