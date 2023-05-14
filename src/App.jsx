import './App.css'
import { useState } from 'react';

function App() {

  //a logic wich includes a massive of numbers symbols and words wich use to generate random password
  const [numbers, setNumbers] = useState("1234567890")
  const [symbols, setSymbols] = useState("!@#$%^&*")
  const [upperCase, setUpperCase] = useState("QWERTYUIOPASDFGHJKLZXCVBNM")
  const [lowerCase, setLowerCase] = useState("qwertyuiopasdfghjklzxcvbnm")
  const [password, setPassword] = useState("");

  //a function wich defines a generated passwords value checks user choose
  const generatePassword = () => {
    let characters = '';
    if (document.getElementById('numbers').checked) {
      characters += numbers;
    }
    if (document.getElementById('symbols').checked) {
      characters += symbols;
    }
    if (document.getElementById('upperCase').checked) {
      characters += upperCase;
    }
    if (document.getElementById('lowerCase').checked) {
      characters += lowerCase;
    }

    //generates password in length from 0 to including 12
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(password);
  }

  return (
    <div className='container'>
      <h1 style={{ margin: '0 auto', color: 'white', paddingTop: '20px' }}>Random Password Generator</h1>
      <div className='rnd-number-generator-container'>
        <div className='result'>
          <label>Result:</label>
          <input disabled className='result-container' placeholder='P5g$%dsf@' value={password}></input>
        </div>

        <div className='checkbox1'>
          <input id='upperCase' type='checkbox'></input>
          <h3>Enable UpperCase</h3>
        </div>

        <div className='checkbox1'>
          <input id='lowerCase' type='checkbox'></input>
          <h3>Enable LowerCase</h3>
        </div>

        <div className='checkbox2'>
          <input style={{ marginLeft: '-20px' }} id='symbols' type='checkbox'></input>
          <h3>Enable Symbols</h3>
        </div>

        <div className='checkbox2'>
          <input style={{ marginLeft: '-12px' }} id='numbers' type='checkbox'></input>
          <h3>Enable Numbers</h3>
        </div>

        <button className='generate-button' onClick={generatePassword}>Generate Random Password</button>
      </div>
    </div>
  );
}

export default App;
