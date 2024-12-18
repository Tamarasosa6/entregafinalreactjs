
import { useParams } from 'react-router-dom';

import { getProducts } from '../../services/firebase/firestore/product'
import { useAsync } from '../../hooks/useAsync'

import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = () => {

    const { categoryId } = useParams();

    const asyncFunction = () => getProducts(categoryId);

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId]);

    if (loading) {
      return (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Cargando productos...
        </h3>
      );
    }

    if (error) {
      return (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Error al cargar los productos
        </h3>
      );
    }

  return (
    <main className="container-fluid">
      <section className="container">
        <ItemList products={products} />
      </section>
    </main>
  );
}

export default ItemListContainer
