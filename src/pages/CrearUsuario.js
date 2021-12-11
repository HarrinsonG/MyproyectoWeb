import { ReactComponent as Logo } from "../assets/logopasteur.svg";

export default function CrearUsuario() {
  return (
    <form className="formCrearUsuario">
      <div className="div-form">
        <Logo />
      </div>
      <h3>Registro de usuarios</h3>

      <div className="form-group">
        <label>Tipo de usuario: </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Selecciona una opcion</option>
          <option value="1">Usuario interno</option>
          <option value="2">Administrador</option>
        </select>
      </div>

      <div className="form-group">
        <label>Tipo de documento: </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Selecciona una opcion</option>
          <option value="1">Cedula de ciudadania</option>
          <option value="2">NUIP</option>
          <option value="3">Tarjeta de identidad</option>
        </select>
      </div>

      <div className="form-group">
        <label>Numero documento: </label>
        <input
          type="text"
          name="numdoc"
          className="form-control"
          placeholder=""
        />
      </div>

      <div className="form-group">
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          className="form-control"
          placeholder="Nombres"
        />
      </div>

      <div className="form-group">
        <label>Apellidos: </label>
        <input
          type="text"
          name="apellidos"
          className="form-control"
          placeholder="Apellidos"
        />
      </div>

      
      <label>Sexo: </label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="sexo"
          id="hombre"
          value="hombre"
          checked
        />
        <label class="form-check-label" for="hombre">
          Hombre
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="sexo"
          id="mujer"
          value="mujer"
        />
        <label class="form-check-label" for="mujer">
          Mujer
        </label>
      </div>

      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="correo@correo.com"
        />
      </div>

      <div className="form-group">
        <label>Username: </label>
        <input
          type="text"
          name="usermane"
          className="form-control"
          placeholder="Username"
        />
      </div>

      <div className="form-group">
        <label>Password: </label>
        <input
          type="password"
          name="passw1"
          className="form-control"
          placeholder="Ingrese su password"
        />
      </div>

      <div className="form-group">
        <label>Confirme su Password: </label>
        <input
          type="password"
          name="passw2"
          className="form-control"
          placeholder="Confirme su password"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Ingresar
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
  );
}
