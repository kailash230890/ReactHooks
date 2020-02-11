import React, { useState } from "react";

function FuncHooksCompFour() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByThree = () => {
    for (var i = 0; i < 3; i++) {
      setCount(lastVal => lastVal + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(count + 1)}>IncrementBy +1 </button>
      <button onClick={() => setCount(count - 1)}>DecrementBy -1 </button>
      <button onClick={() => setCount(initialCount)}>ResetBy 0 </button>
      <button onClick={incrementByThree}>IncrementBy +3 </button>
    </div>
  );
}

export default FuncHooksCompFour;
