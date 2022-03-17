import styles from "./TimerForm.module.css";

const TimerForm = () => {
    const handleFormSubmit = (event) => { 
        event.preventDefault();

        const form = event.target;
        const newTimer = Object.fromEntries(new FormData(form));
        newTimer.duration = parseInt(newTimer.duration);
        
    };

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <input type="text" className={styles.input} name="name" placeholder="Name" defaultValue="test" />
            <input type="number" className={styles.input} name="duration" placeholder="Duration (seconds)" min="1" defaultValue={2}
            />
            
            <input type="submit" className={styles.submitButton} value="+" />
        </form>
    );

};

export default TimerForm;