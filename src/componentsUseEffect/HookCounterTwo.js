import React, { useState, useEffect } from "react";

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `I am clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 2)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterTwo;
