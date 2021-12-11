import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img1 from '../assets/img11.png'
import img2 from '../assets/img_agenda.jpg'
import img3 from '../assets/img14.png'

export default function ServicePage() {
    return (
        <div className='div-service' >
            <Row xs={1} md={3} className="g-4">
                <Col className='servicios'>
                    <Card>
                        <Card.Img className='img_serv' variant="top" src={ img1 } />
                        <Card.Body>
                        <Card.Title>Laboratorio y toma de muestras</Card.Title>
                        <Card.Text>
                        El Paciente puede solicitar el servicio de toma de muestras a domicilio, 
                        para su mayor comodidad sin desplazarse hasta las instalaciones del laboratorio.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='servicios'>
                    <Card>
                        <Card.Img className='img_serv' variant="top" src={ img2 } />
                        <Card.Body>
                        <Card.Title>Agendar cita</Card.Title>
                        <Card.Text>
                            Puedes agendar tu cita para realizarte tus exámenes de rutina o
                            especializados.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='servicios'>
                    <Card>
                        <Card.Img className='img_serv' variant="top" src={ img3 } />
                        <Card.Body>
                        <Card.Title>Resultados en línea</Card.Title>
                        <Card.Text>
                            Ahora podrás descargar los resultados de tus exámenes con solo un click.
                            <br/> 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </div>
    )
}

