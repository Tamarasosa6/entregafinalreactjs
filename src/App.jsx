import {BrowserRouter, Routes, Route} from 'react-router-dom'
// custom components
import NavBar from './components/NavBar/NavBar'
import Welcome from './components/Welcome/Welcome'
import Mensaje from './components/Mensaje/Mensaje'

// Pages
import SignUp from './pages/SignUp/SignUp'
import Contacto from './pages/Contacto/Contacto'
import Carrito from './pages/Carrito/Carrito'
import Checkout from './pages/Checkout/Checkout'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
// Eliminar
//import ProductUpload from './pages/ProductsUpload/ProductUpload'
import { NotificationProvider } from './context/NotificationContext'
import { CartProvider } from './context/CartContext'

function App() {
 
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <header className="imagen">
            <NavBar />
            <Mensaje />
            <Welcome />
          </header>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/finalizar-compra" element={<Checkout />} />
            <Route path="/contacto" element={<Contacto />} />
{/*              <Route path="/subir-productos-fake" element={<ProductUpload />} />  */}
            <Route path="*" element={<h2> 404 | Not Found</h2>} />
          </Routes>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );

}

export default App
