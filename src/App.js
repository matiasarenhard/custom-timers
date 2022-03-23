import TimerForm from "./components/TimerForm";
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
          <h3 key={timer.id}>{timer.name}</h3>
        ))}

      </div>
    </main>
  );
}

export default App;
