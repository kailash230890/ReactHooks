import React, { useState } from "react";

function FuncHooksCompThree() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const plusFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(preCount => preCount + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(count + 1)}>Plus + </button>
      <button onClick={() => setCount(count - 1)}>Minius - </button>
      <button onClick={() => setCount(initialCount)}>Reset 0 </button>
      <button onClick={plusFive}>Plus 5+ </button>
    </div>
  );
}

export default FuncHooksCompThree;
