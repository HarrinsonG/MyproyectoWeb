import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

export default class ListaUsuarios extends Component {
  render() {
    return (
      <div className="container">
      <div>
          <h1>Gestionar Usuarios</h1>
      </div>
        <Table className='g-usuarios' striped bordered hover>
          <thead className='encabezado' >
            <tr >
              <th>id</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Numero documento</th>
              <th>Fecha de nacimiento</th>
              <th>Username</th>
              <th>Estado</th>
              <th colSpan="2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Harrinson</td>
              <td>Gutierrez</td>
              <td>1056269315</td>
              <td>02/12/1982</td>
              <td>Harry1502</td>
              <td>Activo</td>
              <td><button className="btn btn-danger btn-block">Editar</button> </td>
              <td><button className="btn btn-info btn-block">Desactivar</button> </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Orianna</td>
              <td>Baez</td>
              <td>1052358696</td>
              <td>08/08/1990</td>
              <td>Orianna2605</td>
              <td>Activo</td>
              <td><button className="btn btn-danger btn-block">Editar</button> </td>
              <td><button className="btn btn-info btn-block">Desactivar</button> </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Eder</td>
              <td>Mendivil</td>
              <td>3763258</td>
              <td>15/01/1956</td>
              <td>Edermendi10</td>
              <td>Activo</td>
              <td><button className="btn btn-danger btn-block">Editar</button> </td>
              <td><button className="btn btn-info btn-block">Desactivar</button> </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
