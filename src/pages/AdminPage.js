import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="dashboard">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Perfil Administrador</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="/username:admin">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span>Citas</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Citas</h6>
              <NavLink to = "/cita" className="collapse-item"> 
                Crear cita
                </NavLink> 
                
              <NavLink  to = "/listacitas" className="collapse-item">
                Gestionar citas
                </NavLink>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Usuarios Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseUsuarios"
            aria-expanded="true"
            aria-controls="collapseUsuarios"
          >
            <span>Usuarios</span>
          </a>
          <div
            id="collapseUsuarios"
            className="collapse"
            aria-labelledby="headingUsuarios"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Usuarios:</h6>
              <NavLink to= "/crearusuario" className="collapse-item" >
                Crear usuario
              </NavLink>
              <NavLink className="collapse-item" to="/listausuarios">
                Gestionar usuarios
              </NavLink>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapseExamenes"
            aria-expanded="true"
            aria-controls="collapseExamenes"
          >
            <span>Examenes</span>
          </a>
          <div
            id="collapseExamenes"
            className="collapse"
            aria-labelledby="headingExamenes"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-4 collapse-inner rounded">
              <h6 className="collapse-header">Examenes</h6>
              <NavLink to="/crearexamen" className="collapse-item" >
                Especialidad
              </NavLink>
              <NavLink to="/crearexamen" className="collapse-item" >
                Crear examen
              </NavLink>
              <NavLink to="/crearexamen" className="collapse-item" >
                Valores Referenciales
              </NavLink>
              <NavLink to="/listausuarios" className="collapse-item" >
                Gestionar examenes
              </NavLink>
            </div>
          </div>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Addons</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </div>
  );
}