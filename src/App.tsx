import { useState } from "react";

export function App() {
  const [firstName, setFirstName] = useState('');
  
  return (

    <>
      <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
      <p>{firstName}</p>
    </>
  );

   
}