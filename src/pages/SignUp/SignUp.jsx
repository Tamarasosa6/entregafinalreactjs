

const SignUp = () => {
  return (
    <div id="crear-cuenta" className="mb-4">
        <input type="text" id="username" className="form-control" placeholder="Nombre de usuario" />
        <input type="password" id="password" className="form-control" placeholder="Contraseña (solo números)" / >
        <button id="crearCuenta" className="btn btn-primary">Crea tu Cuenta y se un Saiyajin</button>
    </div>
  )
}

export default SignUp