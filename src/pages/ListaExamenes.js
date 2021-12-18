import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ListarExamenes() {
  fetch("http://localhost:8000/listaExamenes", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ ...this.state, listaExamenes: data });
    });
}

export default class ListaExamenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaExamenes: [],
    };
    var listaExamenes = ListarExamenes.bind(this);
    listaExamenes();
  }
  render() {
    var DesactivarExamen = (id) => {
      console.log(id, this);
      const values = JSON.stringify({ id: id });
      fetch("http://localhost:8000/desactivarExamen", {
        body: values,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          var listaExamenes = ListarExamenes.bind(this);
          listaExamenes();
          Swal.fire("Examen " + data.estado + " con exito!", "", "success");
        });
    };

    return (
      <div className="container w-75">
        <div>
          <h1>Gestionar Examenes</h1>
        </div>
        <div className="table-responsive">
          <Table className="g-examenes" striped bordered hover>
            <thead className="encabezado">
              <tr>
                <th>id</th>
                <th>Especialidad</th>
                <th>Nombre Examen</th>
                <th>Frecuencia</th>
                <th>Sede</th>
                <th>Requerimientos</th>
                <th>Estado</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaExamenes.map((examen, index) => {
                return (
                  <tr key={examen._id}>
                    <td> {index + 1} </td>
                    <td>{examen.especialidad}</td>
                    <td>{examen.nombre_examen}</td>
                    <td>{examen.frecuencia}</td>
                    <td>{examen.sede}</td>
                    <td>{examen.requerimientos}</td>
                    <td>{examen.estado}</td>
                    <td>
                      <Link to={"/editarexamen/" + examen._id}>
                        <button className="btn btn-danger btn-block">
                          Editar
                        </button>{" "}
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => DesactivarExamen(examen._id)}
                        className="btn btn-info btn-block"
                      >
                        Activar/Desactivar
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
