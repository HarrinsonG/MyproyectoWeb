import { ReactComponent as Logo } from "../assets/logopasteur.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

class CrearUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rol: "",
      tipo_document: "",
      num_document: "",
      nombres: "",
      apellidos: "",
      sexo: "",
      email: "",
      username: "",
      password1: "",
      password2: "",
      estado: "",
      condiciones: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(name);
  };

  toggleChange = () => {
    this.setState({
      condiciones: !this.state.condiciones,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    fetch("http://localhost:8000/crearUsuario", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Usuario registrado con exito!", "", "success");
      });
    this.setState({
      rol: "",
      tipo_document: "",
      num_document: "",
      nombres: "",
      apellidos: "",
      sexo: "",
      email: "",
      username: "",
      password1: "",
      password2: "",
      estado: "",
      condiciones: false,
    });
  };

  render() {
    const {
      num_document,
      nombres,
      apellidos,
      email,
      username,
      password1,
      password2,
      condiciones,
    } = this.state;

    return (
      <form className="formCrearUsuario" onSubmit={this.handleSubmit}>
        <div className="div-form">
          <Logo />
        </div>
        <h3>Registro de Usuarios</h3>

        <div className="form-group">
          <label>Tipo de usuario: </label>
          <select
            defaultValue=""
            name="rol"
            id="rol"
            onChange={this.handleChange}
            className="form-control"
            aria-label="Default select example"
          >
            <option value="">Selecciona una opcion</option>
            <option value="administrador">Administrador</option>
            <option value="usuario_interno">Usuario interno</option>
            <option value="paciente">Paciente</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tipo de documento: </label>
          <select
            defaultValue=""
            name="tipo_document"
            id="tipo_document"
            onChange={this.handleChange}
            className="form-control"
            aria-label="Default select example"
          >
            <option value="">Selecciona una opcion</option>
            <option value="ceduladeciudadania">Cedula de ciudadania</option>
            <option value="nuip">NUIP</option>
            <option value="tarjetadeidentidad">Tarjeta de identidad</option>
          </select>
        </div>

        <div className="form-group">
          <label>Numero documento: </label>
          <input
            type="number"
            name="num_document"
            className="form-control"
            value={num_document}
            onChange={this.handleChange}
            placeholder="Numero documento"
          />
        </div>

        <div className="form-group">
          <label>Nombres:</label>
          <input
            type="text"
            name="nombres"
            className="form-control"
            placeholder="Nombres"
            value={nombres}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Apellidos: </label>
          <input
            type="text"
            name="apellidos"
            className="form-control"
            placeholder="Apellidos"
            value={apellidos}
            onChange={this.handleChange}
          />
        </div>

        <label>Sexo: </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sexo"
            id="hombre"
            value="hombre"
            onChange={this.handleChange}
          />
          <label className="form-check-label" for="hombre">
            Hombre
          </label>
          <br />
          <input
            className="form-check-input"
            type="radio"
            name="sexo"
            id="mujer"
            value="mujer"
            onChange={this.handleChange}
          />
          <label className="form-check-label" for="mujer">
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
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            name="password1"
            className="form-control"
            placeholder="Ingrese su password"
            value={password1}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Confirme su Password: </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            placeholder="Confirme su password"
            value={password2}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Estado: </label>
          <select
            defaultValue=""
            name="estado"
            id="estado"
            onChange={this.handleChange}
            className="form-control"
            aria-label="Default select example"
          >
            <option value="">Selecciona una opcion</option>
            <option value="activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="condiciones"
            id="flexCheckDefault"
            checked={condiciones}
            onChange={this.toggleChange}
          />
          <label className="form-check-label" for="flexCheckDefault" checked>
            Acepto las pol??ticas de privacidad de datos
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <NavLink to="/login">sign in?</NavLink>
        </p>
      </form>
    );
  }
}

export default CrearUsuario;
