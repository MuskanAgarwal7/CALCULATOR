import styles from "./Button.module.css"

const Button = ({ onButtonClick }) => {

    const btnNumbers = ["c", 1, 2, "+", 3, 4, "-", 5, 6, "*", 7, 8, "/", "=", 9, 0, "."]

    return <div className={styles.btnContainer}>
        {btnNumbers.map(numbers =>
            <button key={numbers} className={styles.btn}
                onClick={() => onButtonClick(numbers)}>
                {numbers}</button>
        )}
    </div>
}

export default Button;