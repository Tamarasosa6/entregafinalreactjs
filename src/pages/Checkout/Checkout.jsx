import { useState } from "react"
import { useCart } from "../../hooks/useCart"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase" 
import { useNotification } from "../../context/NotificationContext"
import { useNavigate } from "react-router-dom"


const Checkout = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const {setNotification} = useNotification()

  let navigate = useNavigate();

  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const createOrder = async (e) => {
    console.log(e)
    e.preventDefault();
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName: nombre,
          email: email,
          phone: telefono,
          addres: direccion,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((item) => item.id);

      const productRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.cantidad;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { cantidad: stockDB - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setNotification("succes", `El id de su orden es ${orderAdded.id}`);

        setOrderCreated(true);
        clearCart();
        return navigate("/");
      } else {
        setNotification("danger", `Hay productos que estan fuera de stock`);
        //console.log("Hay productos que estan fuera de stock");
      }
    } catch (err) {
      setNotification("danger", `Error al generar la orden intente mas tarde: ${err}`);
    } finally {
      setLoading(false);
    }

    if (loading) {
      setNotification("default", `Generando su orden...`);
    }

    if (orderCreated) {
      setNotification("succes", `La orden se genero correctamente`);
      return navigate("/");
    }
  };

  return (
    <>
      <div id="contactoSection" className="container my-4">
        <h2 className="text-center"></h2>
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center text-primary">Datos de Contacto</h1>
            <p>
              Encontranos también en Instagram. Buscanos como @DragonWear y
              escribinos por MD para una rápida respuesta a tu consulta. No
              realizamos ventas mayoristas.
            </p>
            <p>
              <strong>Teléfono:</strong> 3512921272
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:DragonWear@gmail.com">DragonWear@gmail.com</a>
            </p>
            <p>
              <strong>Domicilio</strong> Caseros 952- Córdoba Capital
            </p>
          </div>
          <div className="col-md-6">
            <header className="mb-3">
              <h3 className="text-center text-primary">Datos de tu compra</h3>
              {cart.map((item) => (
                <article key={item.id}>
                  <p className="text-secondary text-center bg-info m-3">
                    {item.nombre} -
                    <span className="badge">Cantidad: {totalQuantity}</span>
                  </p>
                </article>
              ))}
            </header>
            <form onSubmit={(e) => createOrder(e)}>
              <h3 className="text-center text-primary">Datos del comprador</h3>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="form-control mb-3"
                placeholder="Teléfono"
                required
              />
              <input
                type="tex"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="form-control mb-3"
                placeholder="Direccion"
                required
              />
              <div className="d-flex justify-content-center p-3 ">
                <button className="btn btn-info">Generar Orden</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout
