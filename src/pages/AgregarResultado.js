import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";

class AgregarResultado extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    alert(values);
  };

  render() {
    return (
      <Container className="resul_examenes">
      <Row>
      <Col><h1>Resultados Paciente</h1></Col>
      <Col></Col>
      <hr></hr>
        <Row>
          <Col></Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Buscar paciente...."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Buscar
              </Button>
            </InputGroup>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="form-group">
              <label>Nombre paciente:</label>
              <input
                type="text"
                name="nombre_paciente"
                className="form-control"
              />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label>Cedula: </label>
              <input type="number" name="frecuencia" className="form-control" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="form-group">
              <label>Sexo: </label>
              <input
                type="text"
                name="nombre_paciente"
                className="form-control"
              />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label>Correo</label>
              <input type="email" name="correo" className="form-control" />
            </div>
          </Col>
        </Row>
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
          <Col></Col>
          <Col></Col>
          <Col>
            <Button href="http://localhost:8000/pdf" target="_blank" variant="success">Generar pdf</Button>{" "}
            <Button variant="warning">Editar</Button>{" "}
          </Col>
        </Row>
        <br></br>
        </Row>
      </Container>
    );
  }
}

export default AgregarResultado;
