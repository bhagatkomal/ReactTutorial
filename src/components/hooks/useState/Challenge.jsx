import { use, useState } from 'react';
import './index.css';
export const Challenge = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setCount(count+step);
    }

    const handleDecrement = () => {
        setCount(count-step);
    }

    const handleReset = () => {
        setCount(0);
    } 

    const handleInput = (val) => {
        setStep(val);
    }

    return (
        <div className='container state-container' style={{ textAlign: "center" }}>
            <h1>userState Hooks!</h1>
            <p className='text-center'>{count}</p>
            <label>Step: </label>
            <input type='number' value={step} onChange={(event) => handleInput(Number(event.target.value))} />
            <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
            <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}