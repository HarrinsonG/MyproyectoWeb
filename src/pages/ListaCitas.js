import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

export default class ListaCitas extends Component {
  render() {
    return (
      <div className="container">
      <div >
          <h1>Gestionar Citas</h1>
      </div>
        <Table className='gestioncitas' striped bordered hover>
          <thead className='encabezado' >
            <tr >
              <th>id</th>
              <th>Username</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Laboratorio</th>
              <th>Sede</th>
              <th colSpan="2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Harry1502</td>
              <td>02/12/2021</td>
              <td>10:00 am</td>
              <td>Hemograma</td>
              <td>Sede Norte</td>
              <td><button className="btn btn-danger btn-block">Reagendar</button> </td>
              <td><button className="btn btn-info btn-block">Cancelar</button> </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Orianna2605</td>
              <td>03/12/2021</td>
              <td>09:00 am</td>
              <td>Perfil lipídico</td>
              <td>Sede Sur</td>
              <td><button className="btn btn-danger btn-block">Reagendar</button> </td>
              <td><button className="btn btn-info btn-block">Cancelar</button> </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Edermendi10</td>
              <td>09/12/2021</td>
              <td>08:00 am</td>
              <td>Hemograma</td>
              <td>Sede Norte</td>
              <td><button className="btn btn-danger btn-block">Reagendar</button> </td>
              <td><button className="btn btn-info btn-block">Cancelar</button> </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
