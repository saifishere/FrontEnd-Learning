import { useState } from 'react';
import styles from './App.module.css'
import Display from './components/Display';
import BottonsContainer from './components/BottonsContainer';
function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("")
    }
    else if(buttonText == '='){
      const result = eval(calVal)
      setCalVal(result)
    }
    else{
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  }

  return (
    <center className={styles.calculator}>
      <Display displayValue = {calVal} />
      <BottonsContainer onButtonClick={onButtonClick} />
    </center>
  );
}

export default App;
