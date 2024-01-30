import 'bootstrap/dist/css/bootstrap.min.css'
import './first_grid.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container fluid  style={{backgroundImage: 'url(/images/plus.jpeg)', backgroundRepeat : 'no-repeat',backgroundSize:'cover'}}>
        <div className='background'>
            <Row>
                <Col className='texts' xs={12} sm={7} md={7} lg={7}>
                <h2 className="h1">"Bringing <span class="sp1">Healthcare</span> to Your Fingertips"</h2>
                <p  className="para">Book Doctors Appointments Online With Easy <br/><span className="sp2">Your Well-being, Our Priority</span></p>
                <p className='butn'><button className="btn1" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Book Appointment</button></p>
                </Col>
                <Col className='img' xs={12} sm={5} md={5} lg={5}><img className='img-fluid' src='images/first.png' alt='doctr'/></Col>
            </Row>
        </div>
    </Container>
  );
}

export default AutoLayoutExample;