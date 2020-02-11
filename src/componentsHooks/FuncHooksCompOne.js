import React, { useState } from "react";

function FuncHooksCompOne() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>ClickHook - {count}</button>
    </div>
  );
}

export default FuncHooksCompOne;
