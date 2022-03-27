import styles from "./Timer.module.css";
import { useState } from "react";

const Timer = ({ name, duration }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
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
                    <span>{timeLeft}</span>
                </div>
            </div>
            
        </section>
    );
 };

export default Timer;