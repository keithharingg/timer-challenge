import { useState, useRef } from 'react';

export default function Player() {
  const inputName = useRef();
  const [playerName, setPlayerName] = useState(null);

  const setName = () => {
    setPlayerName(inputName.current.value);
    inputName.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={setName}>Set Name</button>
      </p>
    </section>
  );
}
