import { ReactComponent as Logo } from "../assets/logopasteur.svg";
import React from "react";
import { NavLink } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      recordatorio: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({...this.state, [name]: value });
    console.log(name);
  };

  toggleChange = () => {
    this.setState({
      recordatorio: !this.state.recordatorio,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    alert(values);
  };

  render() {
    const {
      username,
      password1,
      recordatorio,
    } = this.state;

    return (
      <form className="formLogin" onSubmit={this.handleSubmit}>
        <div className="div-form">
          <Logo />
        </div>
        <h3>Login</h3>

        
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            name="password1"
            className="form-control"
            placeholder="Ingrese su password"
            value={password1}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name='condiciones'
            id="flexCheckDefault"
            checked={recordatorio}
            onChange={this.toggleChange}
          />
          <label className="form-check-label" for="flexCheckDefault" checked>
            Recordarme contraseña
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          Not registered <NavLink to="/register">sign up?</NavLink>
        </p>
      </form>
    );
  }
}

export default LoginPage;