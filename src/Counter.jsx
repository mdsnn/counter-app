import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount(count + 1);
    } 
    
        const handleDecreament = () => {
            if (count > 0) {
              setCount(count - 1);  
            }
            
        }
    
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncreament}>increament</button>
      <button onClick={handleDecreament}>decreament</button>
    </div>
  )
}
