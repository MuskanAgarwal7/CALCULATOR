import styles from "./Input.module.css"

const Input = ({ displayValue }) => {
    return <textarea className={styles.inputText}  id="display" value={displayValue} readOnly />
}

export default Input;