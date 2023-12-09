import { useCharacters } from "./characters-provider";

export const Timer = ({
  currentTimeLeft,
  pause,
  start,
}: {
  currentTimeLeft: number;
  start: () => void;
  pause: () => void;
}) => {
  const { characters } = useCharacters();
  return (
    <div style={{ border: "4px solid black" }}>
      <h1>The time is: {currentTimeLeft}</h1>
      <h2>The amount of characters is {characters.length}</h2>
      <button
        onClick={() => {
          start();
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          pause();
        }}
      >
        Pause
      </button>
    </div>
  );
};
