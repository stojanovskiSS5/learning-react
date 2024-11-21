import { useState, useRef } from "react";

export default function Player() {

  const playerNameRef = useRef();


  const [enteredName, setEnteredName] = useState(null);

  function handleClick(){
    setEnteredName(playerNameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'uknown entity'}</h2>
      <p>
        <input ref={playerNameRef} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
