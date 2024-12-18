import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand  navbar-dark" id="navBar">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/remeras">
              Remeras
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/buzos">
              Buzos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/camisetas">
              Camisetas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">
              Contacto
            </NavLink>
          </li>
{/*            <li className="nav-item">
            <NavLink className="nav-link" to="/subir-productos-fake">
              Subir productos
            </NavLink>
          </li>  */}
        </ul>

        <div className="d-flex align-items-center">
          <div className="input-group" id="buscadorDiv">
            <input
              type="text"
              id="buscador"
              className="form-control"
              placeholder="Buscar productos..."
            />
            <button id="btnBuscar" className="btn btn-primary">
              Buscar
            </button>
          </div>
          <ul id="nav-menu" className="navbar-nav ms-3">
            <li className="nav-item">
              <CardWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
