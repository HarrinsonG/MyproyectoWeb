import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class CrearExamen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      especialidad: "",
      nombre_examen: "",
      frecuencia: "",
      sede: "",
      requerimientos: "",
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
    alert(values);
  };

  render() {
    const { especialidad, nombre_examen, frecuencia, sede, requerimientos } = this.state;

    return (
      <Container>
        <Row>
          <Col>
          </Col>
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
                    <option value="hemograma">Hematologia</option>
                    <option value="perfil_lipidico">Perfil lipidico</option>
                    <option value="urianalisis">Urianalisis</option>
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
                    <label htmlFor="floatingTextarea2">Requerimientos del examen</label>
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        defaultValue={""}
                        value={requerimientos}
                        onChange={this.handleChange}
                      />
                     
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
          <Col>
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CrearExamen;
