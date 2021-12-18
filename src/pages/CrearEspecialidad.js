import { ReactComponent as Logo } from "../assets/logopasteur.svg";
import React from "react";
import Swal from "sweetalert2";

class CrearEspecialidad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidad: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    fetch("http://localhost:8000/crearEspecialidad", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire(
          'Especialidad creada con exito!',
          '',
          'success'
        )
      });
      this.setState({ ...this.state, especialidad: "" });


  };

  render() {
    const { especialidad } = this.state;

    return (
      <form className="formEspecialidad" onSubmit={this.handleSubmit}>
        <div className="div-form">
          <Logo />
        </div>
        <hr></hr>
        <h3>Crear Especialidad</h3>
        <div className="form-group">
          <label>Nombre : </label>
          <input
            type="text"
            name="especialidad"
            className="form-control"
            value={especialidad}
            onChange={this.handleChange}
            placeholder="Especialidad"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Guardar
        </button>
      </form>
    );
  }
}

export default CrearEspecialidad;
