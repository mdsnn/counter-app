import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [incrementAmount, setIncrementAmount] = useState('1');

    const handleIncreament = () => {
        setCount(count + Number(incrementAmount));
    } 
    
    const handleDecreament = () => {
            if (count > 0) {
              setCount(count - 1);  
            }
            
    }

    const handleReset = () => {
    setCount(0);
    };

    const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      handleIncreament();
    } else if (e.key === 'ArrowDown') {
      handleDecreament();
    }
  };
    
  return (
    <div>
      <h1 style={{ color: count % 2 === 0 ? 'green' : 'red' }}>Count: {count}</h1>
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleIncreament}>increament</button>
      <button onClick={handleDecreament}>decreament</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
