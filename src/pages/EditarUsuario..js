import { ReactComponent as Logo } from "../assets/logopasteur.svg";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditarUsuario() {
  var id = useParams();

  var traerUsuario = () => {
    const values = JSON.stringify(id);
    fetch("http://localhost:8000/traerUsuario", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        actualizarUsuario(data);
      });
  };

  useEffect(() => {
    traerUsuario();
  });

  console.log(useParams());
  const [usuario, actualizarUsuario] = useState({
    _id: "",
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

  var handleChange = (e) => {
    const { name, value } = e.target;
    actualizarUsuario({ ...usuario, [name]: value });
    console.log(name);
  };

  var toggleChange = () => {
    actualizarUsuario({
      condiciones: !usuario.condiciones,
    });
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(usuario);
    fetch("http://localhost:8000/editarUsuario", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Usuario modificado con exito!", "", "success");
      });
    actualizarUsuario({
      _id: "",
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

  return (
    <form className="formEditUsuario" onSubmit={handleSubmit}>
      <div className="div-form">
        <Logo />
      </div>
      <h3>Registro de Usuarios</h3>

      <div className="form-group">
        <label>Tipo de usuario: </label>
        <select
          value={usuario.rol}
          defaultValue=""
          name="rol"
          id="rol"
          onChange={handleChange}
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
          value={usuario.tipo_document}
          defaultValue=""
          name="tipo_document"
          id="tipo_document"
          onChange={handleChange}
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
          value={usuario.num_document}
          onChange={handleChange}
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
          value={usuario.nombres}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Apellidos: </label>
        <input
          type="text"
          name="apellidos"
          className="form-control"
          placeholder="Apellidos"
          value={usuario.apellidos}
          onChange={handleChange}
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
          onChange={handleChange}
          checked={usuario.sexo === "hombre" ? true : false}
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
          onChange={handleChange}
          checked={usuario.sexo === "mujer" ? true : false}
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
          value={usuario.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Username: </label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={usuario.username}
          onChange={handleChange}
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
          value={usuario.password1}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Confirme su Password: </label>
        <input
          type="password"
          name="password2"
          className="form-control"
          placeholder="Confirme su password"
          value={usuario.password2}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Estado: </label>
        <select
          value={usuario.estado}
          defaultValue=""
          name="estado"
          id="estado"
          onChange={handleChange}
          className="form-control"
          aria-label="Default select example"
        >
          <option value="">Selecciona una opcion</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="condiciones"
          id="flexCheckDefault"
          checked={usuario.condiciones}
          onChange={toggleChange}
        />
        <label className="form-check-label" for="flexCheckDefault" checked>
          Acepto las políticas de privacidad de datos
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Guardar cambios
      </button>
      <p className="forgot-password text-right">
        Already registered <NavLink to="/login">sign in?</NavLink>
      </p>
    </form>
  );
}
