import {useState} from 'react';

export function Counter(){
    const [counter, setCounter] = useState(0);
    const decrement = () => {
        setCounter(counter - 1);
    }

    const increment = () => {
        setCounter(counter + 1);
    }


    return (
        <div>
            <button onClick={decrement}>-1</button>
            <p>{counter}</p>
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default Counter;