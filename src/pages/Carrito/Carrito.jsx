import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { cart, getTotal, totalQuantity } = useCart();
    const total = getTotal();
    console.log(total);
    console.log(cart)

    if (totalQuantity === 0) {
      return (
        <h1 style={{ textAlign: "center", color: "red", paddingTop: "40px" }}>
          No hay items en el carrito
        </h1>
      );
    }
    
  return (
<>          
  <div>
    {cart.map((item) => (
    <CartItem key={item.id} {...item} />
    ))}
  </div>
  <h2 className="text-center p-3">Total: ${total}</h2>
  <div className="card-footer text-center">
    <Link to="/finalizar-compra" className="btn btn-danger">
      Enviar y Finalizar Compra
    </Link>
  </div>
</>
  );
};

export default Carrito;
