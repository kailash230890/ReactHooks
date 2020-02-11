import React, { useState } from "react";

function HookCounterObjTwo() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({...name, lastName: e.target.value })}
      />
      <input
        type="text"
        value={name.age}
        onChange={e => setName({...name, age: e.target.value })}
      />
      <input
        type="text"
        value={name.email}
        onChange={e => setName({...name, email: e.target.value })}
      />

      <h4> Your firstName : {name.firstName}</h4>
      <h4> Your LastName : {name.lastName}</h4>
      <h4> Your Age : {name.age}</h4>
      <h4> Your Email : {name.email}</h4>
    </form>
  );
}

export default HookCounterObjTwo;
