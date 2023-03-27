import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cross from '../images/jesus-cross.jpg';


function Mass() {
  return (
    <div className="mass container-fluid" id="mass-times" >
      <Container className='about-container'>
        <Row>
          <Col className='mass-img'>
            <img src={Cross} alt="lady mary" class="rounded" />
          </Col>
          <Col className='mass-text'>
            <h2 className="mass-title">Mass Times</h2>
            <Row>
              <Col>
                <h3 className='sub-title'>Main Church</h3>
                <h4>Daily Mass</h4>
                <p>Monday - Sunday</p>
                <p>6:30 am</p>
                <h4>Anticipated Mass</h4>
                <p>Saturday</p>
                <p>6:00 pm</p>
                <h4>Sunday Mass</h4>
                <p>6:30 am</p>
                <p>7:30 am</p>
                <p>9:00 am</p>
                <p>10:30 am - Batism</p>
                <p>4:00 pm</p>
                <p>5:30 pm</p>
              </Col>
              <Col>
                <h3 className='sub-title'>BEC Chapels</h3>
                <h4>Anticipated Mass</h4>
                <p>Saturday</p>
                <p>6:00 pm - Annex41</p>
                <p>6:00 pm - Parkview</p>
                <h4>Sunday Mass</h4>
                <p>6:00 am - Sta. Ana</p>
                <p>6:00 am - Villa Paraiso</p>
                <p>7:30 am - Culdesac</p>
                <p>9:00 am - Executive Heights</p>
                <p>9:00 am - Countryside</p>
                <p>9:00 am - Marimar</p>
                <p>10:30 pm - Siena Park</p>
              </Col>
            </Row> 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mass;