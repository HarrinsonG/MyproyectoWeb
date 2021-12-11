import React from "react";
import Button from 'react-bootstrap/Button'

function CrearExamen() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <Button variant="warning">Crear </Button>{' '}
          <Button variant="secondary">Modificar</Button>{" "}
          <Button variant="success">Desactivar</Button>{" "}
        </div>
        <div className="col">2 of 2</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="col">3 of 3</div>
      </div>
    </div>
  );
}

export default CrearExamen;
