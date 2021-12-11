import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import img3 from "../assets/img14.png";

export default function ResultPage() {
  return (
    <div className="resultpage">
      <div row>
        <Col className="servicios">
          <Card>
            <Card.Img className="img_serv" variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Resultados en línea</Card.Title>
              <Card.Text>
                Ahora podrás descargar los resultados de tus exámenes con solo
                un click.{" "}
                <NavLink to="/login" class="card-link">
                  Aquí
                </NavLink>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}
