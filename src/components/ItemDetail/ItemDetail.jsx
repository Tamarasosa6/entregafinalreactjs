import { Link } from "react-router-dom"

import { useCart } from "../../hooks/useCart";
import { useNotification } from "../../context/NotificationContext";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.css";
const ItemDetail = ({id,nombre, imagen, categoria, precio, cantidad}) => {
  const { addItem, isInCart } = useCart();
  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const produtObj = {
      id,
      nombre,
      precio,
      quantity: count,
    };
    addItem(produtObj);
    setNotification("success", `Se agregaron ${count} de ${name}`);
  };  
  return (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imagen}
          className="card-img-top"
          alt={nombre}
        />

        <div className="card-body">
          <h5 className="card-title title">{nombre}</h5>
          <p className="card-text">Category: {categoria}</p>
          <p className="card-text">Precio: $ {precio}</p>
          <p className="card-text">Disponibles: {cantidad}</p>
        </div>
        <div className="card-footer">
          {isInCart(id) ? (
            <Link to="/carrito">Finalizar Compra</Link>
          ) : (
            <ItemCount stock={cantidad} onAdd={handleAdd} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail
