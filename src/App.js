import TimerForm from "./components/TimerForm";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}> 
      <h1 className={styles.title}>Timers</h1> 
      <TimerForm />
      
    </main>
  );
}

export default App;
