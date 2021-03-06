import React, { Fragment, useState } from "react";
import { ReactComponent as Logo } from "../assets/logopasteur.svg";

const ReagendarCita = () => {
  //Crar state de citas
  const [cita, actualizarCita] = useState({
    usuario:"",
    fecha: "",
    hora: "",
    sede: "",
    tipo_examen: "",
    sintomas: "",
  });


  //funcion que se ejecuta cada que el usario escribe en un input
  const actualizarstate = (event) => {
    actualizarCita({
      ...cita,
      [event.target.name]: event.target.value,
    });
  };

  //Extraer los valores
  const { usuario, fecha, hora, sintomas } = cita;
  console.log(cita)

  //Cuando el usuario preciona enviar cita.
  const submitReagendarCita = (event) => {
    event.preventDefault();
    console.log(submitReagendarCita)

    //Reinicar el form
    actualizarCita({
      usuario: "",
      fecha: "",
      hora: "",
      sede: "",
      tipo_examen: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <form className="formReagendarcita" onSubmit={submitReagendarCita}>
        <div className="div-form">
          <Logo />
        </div>
        <h3>Reagendar cita</h3>
        <label>Usuario</label>
        <br />
        <input
          type="text"
          name="usuario"
          className="form-control"
          onChange={actualizarstate}
          value={usuario}
        />
        <br />
        <label>Fecha</label>
        <br />
        <input
          type="date"
          name="fecha"
          className="form-control"
          onChange={actualizarstate}
          value={fecha}
        />
        <br />
        <label>Hora</label>
        <br />
        <input
          type="time"
          name="hora"
          className="form-control"
          onChange={actualizarstate}
          value={hora}
        />
        <br />
        <div className="form-group">
          <label>Sede: </label>
          <select defaultValue='' name="sede" className="form-select" aria-label="Default select example" onChange={actualizarstate} >
            <option selected>Selecciona una opcion</option>
            <option value='sede_norte' >
              Sede Norte
            </option>
            <option value='sede_centro' >
              Sede Centro
            </option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de examen: </label>
          <select defaultValue='' name="tipo_examen" class="form-select" aria-label="Default select example"onChange={actualizarstate} >
            <option selected value=''>Selecciona una opcion</option>
            <option value='hemograma'>
              Hemograma
            </option>
            <option value='perfil_lipidico'>
              Perfil lip??dico
            </option>
          </select>
        </div>
        <div>
        <label>Observaciones</label>
        <textarea
          className="form-control"
          name="sintomas"
          onChange={actualizarstate}
          value={sintomas}
        ></textarea>
        </div>
        <br />
        <button type="submit" value="submit" className="btn btn-primary btn-block">
          Reagendar Cita
        </button>
        <br />
        <br />
      </form>
    </Fragment>
  );
};


export default ReagendarCita;
