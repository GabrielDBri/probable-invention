import { useState } from "react";

export function App() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter => counter + 1)
  }

  return (
    <button type="button" onClick={handleClick}>Gabriel {counter}</button>
  )
}