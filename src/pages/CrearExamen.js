import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

function ListarEspecialidades() {
  fetch("http://localhost:8000/listaEspecialidad", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ ...this.state, especialidades: data });
    });
}

class CrearExamen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidades: [],
      especialidad: "",
      nombre_examen: "",
      frecuencia: "",
      sede: "",
      estado:"",
      requerimientos: "",
    };
    const listaespecialidades = ListarEspecialidades.bind(this);
    listaespecialidades();
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    fetch("http://localhost:8000/crearExamen", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Examen creado con exito!", "", "success");
      });
    this.setState({
      especialidades: [],
      especialidad: "",
      nombre_examen: "",
      frecuencia: "",
      sede: "",
      estado:"",
      requerimientos: "",
    });
  };

  render() {
    const { nombre_examen, frecuencia, requerimientos } = this.state;

    return (
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <br></br>
            <Row>
              <form className="formCrearExamen" onSubmit={this.handleSubmit}>
                <h3>Crear examen</h3>
                <div className="form-group">
                  <label>Especialidad: </label>
                  <select
                    defaultValue=""
                    name="especialidad"
                    id="especialidad"
                    onChange={this.handleChange}
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Selecciona una opcion</option>
                    {this.state.especialidades.map((especialidad) => {
                      return (
                        <option value={especialidad.especialidad}>
                          {especialidad.especialidad}{" "}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group">
                  <label>Nombre examen: </label>
                  <input
                    type="text"
                    name="nombre_examen"
                    className="form-control"
                    value={nombre_examen}
                    onChange={this.handleChange}
                    placeholder="Nombre examen"
                  />
                </div>

                <Row>
                  <Col>
                    <div className="form-group">
                      <label>Frecuencia:</label>
                      <input
                        type="number"
                        name="frecuencia"
                        className="form-control"
                        value={frecuencia}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group">
                      <label>Sede: </label>
                      <select
                        defaultValue=""
                        name="sede"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={this.handleChange}
                      >
                        <option selected>Selecciona una opcion</option>
                        <option value="sede_norte">Sede Norte</option>
                        <option value="sede_centro">Sede Centro</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="form-group">
                      <label htmlFor="floatingTextarea2">
                        Requerimientos del examen
                      </label>
                      <textarea
                        className="form-control"
                        name="requerimientos"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        value={requerimientos}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
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
                  </Col>
                </Row>
                <br />
                <button type="submit" className="btn btn-primary btn-block">
                  Guardar examen
                </button>
              </form>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default CrearExamen;
