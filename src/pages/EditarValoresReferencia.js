import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

export default function EditarValoresReferencia() {
  const ListarEspecialidades = ()=> {
    fetch("http://localhost:8000/listaEspecialidad", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        actualizarValoresReferencia({ ...valor_referencia, especialidades: data });
      });
  }
  

  var id = useParams();

  useEffect(() => {
    ListarEspecialidades()
    const values = JSON.stringify(id);
    fetch("http://localhost:8000/traerValoresReferencia", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        /* actualizarValoresReferencia(data);
        console.log(valor_referencia); */
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [valor_referencia, actualizarValoresReferencia] = useState({
    especialidades: [],
    especialidad: "",
    examenes: [],
    nombre_examen: "",
    parametros: [],
  });

  console.log(useParams());

  var handleOnchange = (e, parametro) => {
    actualizarValoresReferencia({
      ...valor_referencia,
      parametros: [{ ...parametro, valor_referencia: e.target.value }],
    });
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(valor_referencia.parametros[0]);
    fetch("http://localhost:8000/editarValoresReferencia", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Valores de Referencia modificado con exito!", "", "success");
      });
    actualizarValoresReferencia({
      especialidades: [],
      especialidad: "",
      examenes: [],
      nombre_examen: "",
      parametros: [],
    });
  };

  const limpiarparametros=(e)=> {
    actualizarValoresReferencia({
      ...valor_referencia,
      parametros: [],
      [e.target.name]: e.target.value,
    });
    const values = JSON.stringify({ especialidad: e.target.value });
    fetch("http://localhost:8000/listaExamenes", {
      body: values,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var examenes = {};
        for (const examen of data) {
          examenes[examen.nombre_examen] = examen.nombre_examen;
        }

        Swal.fire({
          title: "Selecciona un examen de " + e.target.value,
          input: "select",
          inputOptions: examenes,
          inputPlaceholder: "Selecciona un examen",
          showCancelButton: true,
        }).then((examen) => {
          console.log(examen);
          const values = JSON.stringify({ nombre_examen: examen.value });
          fetch("http://localhost:8000/traerValoresReferencia", {
            body: values,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              //data["valor_referencia"] = "";
              actualizarValoresReferencia({
                ...valor_referencia,
                parametros: [ data],
              });
              console.log(valor_referencia.parametros);
              
            });
        });
      });
  }

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
                  value={valor_referencia.especialidad}
                  defaultValue=""
                  name="especialidad"
                  id="especialidad"
                  className="form-control"
                  onChange={limpiarparametros}
                  aria-label="Default select example"
                >
                  <option value="">Selecciona una opcion</option>
                  {valor_referencia.especialidades.map((especialidad) => {
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
                <th>Valores de Referencia</th>
              </tr>
            </thead>
            <tbody>
              {valor_referencia.parametros.map((parametro) => {
                return (
                  <tr>
                    <td>{parametro.nombre_examen}</td>
                    <td>
                      <input
                        type="text"
                        value={parametro.valor_referencia}
                        onChange={(e) => handleOnchange(e, parametro)}
                        name={parametro._id}
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
          <Col></Col>
          <Col>
            <Button onClick={handleSubmit} variant="success">
              Guardar cambios
            </Button>{" "}
          </Col>
        </Row>
        <br></br>
      </Row>
    </Container>
  );
}
