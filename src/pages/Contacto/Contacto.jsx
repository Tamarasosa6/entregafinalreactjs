
const Contacto = () => {
  return (
    <div id="contactoSection"  className="container my-4">
          <h2 className="text-center"></h2>
          <div className="row">
              <div className="col-md-6">
                  <h1>Datos de Contacto</h1>
                  <p>Encontranos también en Instagram. Buscanos como @DragonWear y escribinos por MD para una rápida respuesta a tu consulta. No realizamos ventas mayoristas.</p>
                  <p><strong>Teléfono:</strong> 3512921272</p>
                  <p><strong>Email:</strong> <a href="mailto:DragonWear@gmail.com">DragonWear@gmail.com</a></p>
                  <p><strong>Domicilio</strong> Caseros 952- Córdoba Capital</p>
              </div>
              <div className="col-md-6">
                  <h3>Formulario de Contacto</h3>
                  <form id="contactoForm">
                      <input type="text" id="nombreContacto" className="form-control mb-3" placeholder="Nombre" required />
                      <input type="email" id="emailContacto" className="form-control mb-3" placeholder="Email" required />
                      <input type="tel" id="telefono" className="form-control mb-3" placeholder="Teléfono" required />
                      <textarea id="mensaje" className="form-control mb-3" placeholder="Mensaje" required></textarea>
                      <button type="submit" className="btn btn-primary">Enviar</button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contacto