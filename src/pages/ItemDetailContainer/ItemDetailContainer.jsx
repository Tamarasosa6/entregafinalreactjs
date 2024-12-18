import {useParams} from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import {useAsync} from "../../hooks/useAsync"
import {getProductById} from "../../services/firebase/firestore/product"


const ItemDetailContainer = () => {

    const { productId } = useParams();

    const asyncFunction = () => getProductById(productId);

    const { data: product, loading } = useAsync(asyncFunction, [productId]);
  
  return (
    <div>
      {loading ? (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Cargando...
        </h3>
      ) : (
        <>
          <h2>Detalle del producto</h2>
          <hr />
          <ItemDetail {...product} />
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer
