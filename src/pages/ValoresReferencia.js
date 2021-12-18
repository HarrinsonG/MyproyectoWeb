import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
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
class ValoresReferencia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidades: [],
      especialidad: "",
      parametros: [],
    };
    var listaEspecialidades = ListarEspecialidades.bind(this);
    listaEspecialidades();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    alert(values);
  };

  agregarParametro() {
    const new_parametro = "Hola";
    //this.state.parametros.push(new_parametro)
    this.setState({
      ...this.state,
      parametros: [...this.state.parametros, new_parametro],
    });
  }

  async limpiarparametros(e) {
    this.setState({
      ...this.state,
      parametros: [],
      [e.target.name]: e.target.value,
    });
    const values = JSON.stringify({especialidad:e.target.value});
    fetch("http://localhost:8000/listaExamenes", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        var examenes = {}
        for (const examen of data) {
          examenes[examen._id]=examen.nombre_examen
        }
        
        Swal.fire({
          title: "Selecciona un examen de "+ e.target.value ,
          input: "select",
          inputOptions:examenes,
          inputPlaceholder: "Selecciona un examen",
          showCancelButton: true,
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === "examenes") {
                resolve();
              } else {
                resolve("You need to select oranges :)");
              }
            });
          },
        }).then((values)=>{
          console.log(values)
        })
    
      });

    
  }

  render() {
    return (
      <Container className="resul_examenes">
        <Row>
          <Col></Col>
          <Col>
            <h1>Valores de Referencia</h1>
          </Col>
          <Row>
            <Row>
              <Col></Col>
              <Col>
                <div className="form-group">
                  <label>Especialidad: </label>
                  <select
                    value={this.state.especialidad}
                    defaultValue=""
                    name="especialidad"
                    id="especialidad"
                    className="form-control"
                    onChange={this.limpiarparametros.bind(this)}
                    aria-label="Default select example"
                  >
                    <option value="">Selecciona una opcion</option>
                    {this.state.especialidades.map((especialidad) => {
                      return (
                        <option value={especialidad.especialidad}>
                          {especialidad.especialidad}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </Col>
              <Col></Col>
            </Row>
            <Col></Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre del examen</th>
                  <th>Resultado Paciente</th>
                  <th>Valores de Referencia</th>
                </tr>
              </thead>
              <tbody>
                {this.state.parametros.map((parametro) => {
                  return (
                    <tr>
                      <td>Hemoglobina</td>
                      <td>
                        <input
                          type="number"
                          name="minimo"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="maximo"
                          className="form-control"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Button
                onClick={this.agregarParametro.bind(this)}
                disabled={this.state.especialidad ? false : true}
                variant="outline-dark"
              >
                Agregar parametro
              </Button>
            </Col>
            <Col>
              <Button variant="success">Guardar</Button>{" "}
              <Button variant="warning">Editar</Button>{" "}
            </Col>
          </Row>
          <br></br>
        </Row>
      </Container>
    );
  }
}

export default ValoresReferencia;
