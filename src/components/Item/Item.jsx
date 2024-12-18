import { Link } from "react-router-dom"

import './Item.css'
const Item = ({product}) => {
  return (
    <div className="card mx-4 my-2" style={{width: "18rem"}}>
        <img src={product.imagen} className="card-img-top" alt={product.name}/>
        <div className="card-body">
            <h2 className="card-title title">Producto: {product.nombre}</h2>
            <p className="card-text">Categoria: {product.categoria}</p>
            <p className="card-text">Precio: ${product.precio}</p>
            <Link to={`/product/${product.id}`} className="btn btn-primary" >Ver Detalle</Link>
        </div>
    </div>
  )
}

export default Item
