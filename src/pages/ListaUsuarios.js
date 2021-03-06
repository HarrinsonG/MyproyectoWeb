import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ListarUsuarios() {
  fetch("http://localhost:8000/listaUsuarios", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({ ...this.state, listaUsuarios: data });
    });
}

export default class ListaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaUsuarios: [],
    };
    var listaUsuarios = ListarUsuarios.bind(this);
    listaUsuarios();
  }
  render() {
    var DesactivarUsuario = (id) => {
      console.log(id, this);
      const values = JSON.stringify({ id: id });
      fetch("http://localhost:8000/desactivarUsuario", {
        body: values,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          var listaUsuarios = ListarUsuarios.bind(this);
          listaUsuarios();
          Swal.fire("Usuario " + data.estado + " con exito!", "", "success");
        });
    };

    return (
      <div className="container w-75">
        <div>
          <h1>Gestionar Usuarios</h1>
        </div>
        <div className="table-responsive">
          <Table className="g-usuarios" striped bordered hover>
            <thead className="encabezado">
              <tr>
                <th>id</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Numero documento</th>
                <th>Sexo</th>
                <th>Username</th>
                <th>Rol</th>
                <th>Estado</th>
                <th colSpan="2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaUsuarios.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td> {index + 1} </td>
                    <td>{user.nombres}</td>
                    <td>{user.apellidos}</td>
                    <td>{user.num_document}</td>
                    <td>{user.sexo}</td>
                    <td>{user.username}</td>
                    <td>{user.rol}</td>
                    <td>{user.estado}</td>
                    <td>
                      <Link to={"/editarusuario/" + user._id}>
                        <button className="btn btn-danger btn-block">
                          Editar
                        </button>{" "}
                      </Link>{" "}
                    </td>
                    <td>
                      <button
                        onClick={() => DesactivarUsuario(user._id)}
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
