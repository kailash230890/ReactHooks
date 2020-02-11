import React, { useState, useEffect } from "react";

function HookCounterThree() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You are clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>
        Clicking by {count} times
      </button>
    </div>
  );
}

export default HookCounterThree;
