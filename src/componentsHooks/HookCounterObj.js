import React, { useState } from "react";

function HookCounterObj() {
  const [name, setName] = useState({ fisrtName: "", lastName: "" })
  
  return (
    <div>
        <form>
    <input
      type="text"
      value={name.fisrtName}
      onChange={e => setName({...name, fisrtName: e.target.value })}
    />
    <input
      type="text"
      value={name.lastName}
      onChange={e => setName({...name, lastName: e.target.value })}
    />

    <h2>Your First Name is - {name.fisrtName} </h2>
    <h2>Your Last Name is - {name.lastName} </h2>
  </form>
    </div>
  )
}

export default HookCounterObj;
