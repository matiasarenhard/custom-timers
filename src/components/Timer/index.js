import styles from "./Timer.module.css";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Timer = ({ id, name, duration, deleteTimer }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [intervalId, setIntervalId] = useState(null);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if(timeLeft === 0) {
            clearInterval(intervalId);
            setRunning(false);
        }
        
    }, [timeLeft, intervalId]);
    
    useEffect(() => { 
        return () => { 
            clearInterval(intervalId);
        };
    }, [intervalId]);

    const handleStartClick = () => {
        setRunning(true);

        const id = setInterval(() => {
            setTimeLeft((seconds) => seconds - 1);
        }, 1000);

        setIntervalId(id);
    };

    const handleDeleteClick = () => {
        if (window.confirm(`You whant delete "${name}"?`)) { 
            deleteTimer(id);
        }
    };

    return (
        <section className={styles.timer}>
            <header className={styles.header}>
                <h2>
                    {name}
                    <span className={styles.initialDuration}>({duration})</span>
                </h2>
                <button className={`${styles.button} ${styles.delete}`} onClick={handleDeleteClick}>&#x2715;</button>
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