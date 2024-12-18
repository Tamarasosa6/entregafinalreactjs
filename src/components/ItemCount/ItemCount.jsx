import { useState } from 'react'
import "./ItemCount.css";
function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue);
    

    const decrement = () => {
        if(count>1){
            setCount(count => count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount((count) => count + 1);
        }
    };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement}>-</button>
        <h3 className="Number">{count}</h3>
        <button className="Button" onClick={increment}>+</button>      
      </div>
      <div>
        <button className='Button' onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ItemCount
