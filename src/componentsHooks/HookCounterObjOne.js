import React, { useState } from "react";

function HookCounterObjOne() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />

      <h3>Your First Name : {name.firstName}</h3>
      <h3>Your Last Name : {name.lastName}</h3>
    </form>
  );
}

export default HookCounterObjOne;
