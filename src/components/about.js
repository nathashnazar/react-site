import 'bootstrap/dist/css/bootstrap.min.css'
import './about.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container fluid className='main' style={{ background: `linear-gradient(to right, rgba(185, 206, 255, 0.65), rgba(207, 221, 255, 0.28)`, }} >
        <div className='about'>
            <Row>
                <Col className='image' xs={12} sm={12} md={7} lg={6}>
                    <img className='about-img' src='images/pic1.png' alt='sec'/>
                </Col>
                <Col className='content' xs={12} sm={12} md={57} lg={6}>
                    <h1>ABOUT US</h1>
                    <h5>Bringing healthcare to your fingertips</h5>
                    <p>Virtual Consultations: Mobile apps enable users to connect with healthcare professionals through video calls, allowing for remote consultations and diagnosis.
Prescription Management: Some apps facilitate online prescription requestsWearable Technology: Smartwatches and fitness trackers can monitor various health metrics, such as heart rate, sleep patterns, and physical activity, providing users with real-time feedback.
Smart Health Devices: Devices like blood pressure monitors, glucose meters, and thermometers can connect to mobile apps, allowing users to track and manage,Mobile Health Apps: Applications provide information on symptoms, diseases, medications, and general health advice, empowering users to make informed decisions about their well-being.
Health Tracking: Apps can help users keep track of their health data, such as diet, exercise, and medication adherence.</p>
                </Col>
            </Row>
        </div>
    </Container>
  );
}

export default About;