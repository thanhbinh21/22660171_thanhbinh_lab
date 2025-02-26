import React, { useState } from "react";
import './Bai01.css';

function Bai01() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        let res = 0;

        switch (operation) {
            case '+':
              setResult(num1 + num2);
                break;
            case '-':
              setResult(num1 - num2);
                break;
            case 'x':
               setResult(num1 * num2);
                break;
            case '/':
               setResult(num1 / num2);  
                break;
            default:
                res = 'Invalid operation';
        }

       
    };

    return (
        <>
            <div className="baio1">
                <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} />
                <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} />

              <div className="inputradio">
                <input type="radio" name="group" value="+" onChange={(e) => setOperation(e.target.value)} /> <span>+ </span>
                <input type="radio" name="group" value="-" onChange={(e) => setOperation(e.target.value)} /> <span>- </span>
                <input type="radio" name="group" value="x" onChange={(e) => setOperation(e.target.value)} /> <span>x </span>
                <input type="radio" name="group" value="/" onChange={(e) => setOperation(e.target.value)} /> <span>/ </span>
              </div>

                <button onClick={handleCalculate}>Calculate</button>

                {result !== null && <div>Result: {result}</div>}
            </div>
        </>
    );
}

export default Bai01;