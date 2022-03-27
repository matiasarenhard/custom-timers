import TimerForm from "./components/TimerForm";
import Timer from "./components/Timer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [timers, setTimer] = useState([
    { id: 1, name: "Primeiro", duration: 3 },
    { id: 2, name: "Segundo", duration: 60},
  ]);
  return (
    <main className={styles.main}> 
      <h1 className={styles.title}>Timers</h1> 

      <TimerForm setTimer={setTimer}/>
      
      <div className={styles.timers}>
        {timers.map((timer) => (
          <Timer key={timer.id} {...timer}/>
        ))}

      </div>
    </main>
  );
}

export default App;
