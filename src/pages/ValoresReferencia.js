import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";


class ValoresReferencia extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    alert(values);
  };

  render() {
    return (
      <Container className="resul_examenes">
        <Row>
          <Col></Col>
          <Col><h1>Valores de Referencia</h1></Col>
          <Row>
            <Row>
              <Col></Col>
              <Col>
                <div className="form-group">
                  <label>Especialidad: </label>
                  <select
                    defaultValue=""
                    name="especialidad"
                    id="especialidad"
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="hemograma">Hematologia</option>
                    <option value="perfil_lipidico">Perfil lipidico</option>
                    <option value="urianalisis">Urianalisis</option>
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
                <tr>
                  <td>Hematorcrito</td>
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
                <tr>
                  <td>Leucocitos</td>
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
              </tbody>
            </Table>
          </Row>
          <Row>
           <Col></Col>
            <Col><Button variant="outline-dark">Agregar parametro</Button></Col>
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
