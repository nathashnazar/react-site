import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import './card.css'

function Cards() {
  return (
    <Container className='main-cards' fluid  style={{ background: `linear-gradient(to bottom, rgba(221, 231, 255, 1), rgba(221, 231, 255, 0)`, }}>
      <CardGroup >
        <Card className='cards'>
          <Card.Img variant="top" src="images/card1.webp" />
          <Card.Body className='card-body'> 
            <Card.Title>online token booking</Card.Title>
            <Card.Text>
              Skip the queues and book your next doctor's appointment with ease through our online token booking system. 
            </Card.Text>
          </Card.Body>

        </Card>
        <Card className='cards'>
          <Card.Img variant="top" src="images/card2.webp" />
          <Card.Body>
            <Card.Title>Health Records</Card.Title>
            <Card.Text>
              Skip the queues and book your next doctor's appointment with ease through our online token booking system. 
            </Card.Text>
          </Card.Body>

        </Card>
        <Card className='cards'>
          <Card.Img variant="top" src="images/card3.webp" />
          <Card.Body>
            <Card.Title>Doctors and Clinics Near</Card.Title>
            <Card.Text>
              Skip the queues and book your next doctor's appointment with ease through our online token booking system. 
            </Card.Text>
          </Card.Body>

        </Card>
      </CardGroup>
    </Container>

  );
}

export default Cards;