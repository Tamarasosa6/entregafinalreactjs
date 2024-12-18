
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList
