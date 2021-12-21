import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col } from "react-bootstrap";

export default function EditarExamen() {
  var id = useParams();

  useEffect(() => {
    const values = JSON.stringify(id);
    fetch("http://localhost:8000/traerExamen", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        actualizarExamen(data);
        console.log(examen);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [examen, actualizarExamen] = useState({
    especialidades: [],
    especialidad: "",
    nombre_examen: "",
    frecuencia: "",
    sede: "",
    estado: "",
    requerimientos: "",
  });

  console.log(useParams());

  var handleChange = (e) => {
    const { name, value } = e.target;
    actualizarExamen({ ...examen, [name]: value });
    console.log(name);
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(examen);
    fetch("http://localhost:8000/editarExamen", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Examen modificado con exito!", "", "success");
      });
    actualizarExamen({
      especialidades: [],
      especialidad: "",
      nombre_examen: "",
      frecuencia: "",
      sede: "",
      estado: "",
      requerimientos: "",
    });
  };

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
            <form className="formCrearExamen" onSubmit={handleSubmit}>
              <h3>Examen</h3>
              <div className="form-group">
                <label>Especialidad: </label>
                <select
                  value={examen.especialidad}
                  defaultValue=""
                  name="especialidad"
                  id="especialidad"
                  onChange={handleChange}
                  className="form-control"
                  aria-label="Default select example"
                >
                  <option value="">Selecciona una opcion</option>
                  {examen.especialidades.map((especialidad) => {
                    return (
                      <option value={especialidad.especialidad}>
                        {especialidad.especialidad}
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
                  value={examen.nombre_examen}
                  onChange={handleChange}
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
                      value={examen.frecuencia}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Sede: </label>
                    <select
                      value={examen.sede}
                      defaultValue=""
                      name="sede"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleChange}
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
                      value={examen.requerimientos}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Estado: </label>
                    <select
                      value={examen.estado}
                      defaultValue=""
                      name="estado"
                      id="estado"
                      onChange={handleChange}
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
                Guardar cambios
              </button>
            </form>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
