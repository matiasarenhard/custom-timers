import styles from "./Timer.module.css";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Timer = ({ name, duration }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [intervalId, setIntervalId] = useState(null);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if(timeLeft === 0) {
            clearInterval(intervalId);
            setRunning(false);
        }
        
    }, [timeLeft, intervalId]);
    

    const handleStartClick = () => {
        setRunning(true);

        const id = setInterval(() => {
            setTimeLeft((seconds) => seconds - 1);
        }, 1000);

        setIntervalId(id);
    };

    return (
        <section className={styles.timer}>
            <header className={styles.header}>
                <h2>
                    {name}
                    <span className={styles.initialDuration}>({duration})</span>
                </h2>
            </header>

            <div className={styles.details}>
                <div className={styles.timeLeft}>
                    <span>{timeLeft !== 0 ? timeLeft : "Finish!"}</span>
                </div>
                {running ? <Loading/> :  timeLeft > 0 && ((<button className={`${styles.button} ${styles.start}`} onClick={handleStartClick}>Start</button>)) }
                
            </div>
            
        </section>
    );
 };

export default Timer;