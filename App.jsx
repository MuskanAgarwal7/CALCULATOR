import Input from './Componenets/Input';
import Button from './Componenets/Button';
import './App.css'
import { useState } from 'react';

function App() {

  const [calValue, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalValue("");
    }
    else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    }
    else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  }

  return <div className="container">
    <Input displayValue={calValue}></Input>
    <Button onButtonClick={onButtonClick}></Button>
  </div>
}

export default App;
