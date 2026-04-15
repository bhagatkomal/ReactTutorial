import { useState } from 'react';
import './index.css';
export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container state-container' style={{ textAlign: "center" }}>
            <h1>userState Hooks!</h1>
            <p className='text-center'>{count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}