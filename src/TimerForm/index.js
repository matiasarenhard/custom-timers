import styles from "./TimerForm.module.css";

const TimerForm = () => {
    return (
        <form className={styles.form}>
            <input type="text" className={styles.input} name="name" placeholder="Name" />
            <input type="number" className={styles.input} name="duration" placeholder="Duration (seconds)" min="1" />
            
            <input type="submit" className={styles.submitButton} value="+" />
        </form>
    );

};

export default TimerForm;