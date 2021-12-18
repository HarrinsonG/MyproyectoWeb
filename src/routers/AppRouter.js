import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Footer from "../components/Footer";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import ServiceRouter from "./ServiceRouter";
import ResultPage from "../pages/ResultPage";
import AdminPage from "../pages/AdminPage";
import UinternoPage from "../pages/UinternoPage";
import UexternoPage from "../pages/UexternoPage";
import FormularioCita from "../pages/FormularioCita";
import ListaCitas from "../pages/ListaCitas";
import ReagendarCita from "../pages/ReagendarCita";
import ListaUsuarios from "../pages/ListaUsuarios";
import CrearUsuario from "../pages/CrearUsuario";
import EditarUsuario from "../pages/EditarUsuario.";
import CrearExamen from "../pages/CrearExamen";
import CrearEspecialidad from "../pages/CrearEspecialidad";
import AgregarResultado from "../pages/AgregarResultado";
import ValoresReferencia from "../pages/ValoresReferencia";
import ListaExamenes from "../pages/ListaExamenes";
import EditarExamen from "../pages/EditarExamen";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />

        <Route exact path="/profile/:username" component={ProfilePage} />

        <Route path="/Service" component={ServiceRouter} />

        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>

        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />
        <PublicRoute exact path="/result" component={ResultPage} />
        
        <Router basename="/username:admin/">
          <main>
            <Route path="/" component={AdminPage} />
            <Route path="/cita" component={FormularioCita} />
            <Route path="/listacitas" component={ListaCitas} />
            <Route path="/reagendarcita" component={ReagendarCita} />
            <Route path="/crearusuario" component={CrearUsuario} />
            <Route path="/editarusuario/:id" component={EditarUsuario} />
            <Route path="/listausuarios" component={ListaUsuarios} />
            <Route path="/crearespecialidad" component={CrearEspecialidad} />
            <Route path="/crearexamen" component={CrearExamen} />
            <Route path="/listaexamenes" component={ListaExamenes} />
            <Route path="/editarexamen/:id" component={EditarExamen} />
            <Route path="/agregarresultado" component={AgregarResultado} />
            <Route path="/valoresreferencia" component={ValoresReferencia} />
          </main>
        </Router>

        <Route exact path="/username:uinterno" component={UinternoPage} />
        <Route exact path="/username:uexterno" component={UexternoPage} />

        <PrivateRoute exact path="/payments" component={PaymentsPage} />

        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
