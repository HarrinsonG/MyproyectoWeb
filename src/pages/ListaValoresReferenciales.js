import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function ListarValoresReferencia() {
  fetch("http://localhost:8000/listaValoresReferencia", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ ...this.state, listaValoresReferencia: data });
    });
}

export default class ListaValoresReferencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaValoresReferencia: [],
    };
    var listaValoresReferencia = ListarValoresReferencia.bind(this);
    listaValoresReferencia();
  }
  render() {
    
    return (
      <div className="container w-75">
        <div>
          <h1>Gestionar Valores de Referencia</h1>
        </div>
        <div className="table-responsive">
          <Table className="g-examenes" striped bordered hover>
            <thead className="encabezado">
              <tr>
                <th>id</th>
                <th>Especialidad</th>
                <th>Nombre Examen</th>
                <th>Valores Referencia</th>
                <th colSpan="">Accion</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaValoresReferencia.map((examen, index) => {
                return (
                  <tr key={examen._id}>
                    <td> {index + 1} </td>
                    <td>{examen.especialidad}</td>
                    <td>{examen.nombre_examen}</td>
                    <td>{examen.valor_referencia}</td>
                    
                    <td>
                      <Link to={"/editarValoresReferencia/" + examen._id}>
                        <button className="btn btn-danger btn-block">
                          Editar
                        </button>{" "}
                      </Link>{" "}
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
