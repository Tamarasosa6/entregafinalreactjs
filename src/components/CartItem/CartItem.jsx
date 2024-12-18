import { useCart } from '../../hooks/useCart';
import './CartItem.css'
const CartItem = ({id, nombre, quantity, precio}) => {
  
  const { removeItem } = useCart();
  const handleRemove = (id) => {
    removeItem(id)
  }
  
  return (
    <article className="CardCartItem">
      
      <header className="HeaderCartItem">
        <h2 className="ItemHeaderCartItem">{nombre}</h2>
      </header>
      
      <section className="ContainerItemCartItem">
        <h2 className="ItemCartItem fs-4">Cantidad: {quantity}</h2>
        <p className="ItemCartItem fs-5">Precio x unidad: ${precio}</p>
      </section>
      
      <footer className="ItemFooterCartItem">
        <p className="InfoCartItem fs-4">Subtotal: $ {precio * quantity}</p>
        
        <button className="btn btn-primary" onClick={() => handleRemove(id)}>
          ❌
        </button>
      </footer>
    </article>
  );
}

export default CartItem
