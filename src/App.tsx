import "./App.css";
import { useTimer } from "./hooks/useTimer";
import { Timer } from "./timer";

function App() {
  const timer1 = useTimer();
  const timer2 = useTimer();
  const timer3 = useTimer();
  return (
    <>
      <Timer
        currentTimeLeft={timer1.currentTimeLeft}
        pause={timer1.pause}
        start={timer1.start}
      />
      <Timer
        currentTimeLeft={timer2.currentTimeLeft}
        pause={timer2.pause}
        start={timer2.start}
      />
      <Timer
        currentTimeLeft={timer3.currentTimeLeft}
        pause={timer3.pause}
        start={timer3.start}
      />
    </>
  );
}

export default App;
