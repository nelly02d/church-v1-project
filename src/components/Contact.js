import { AiOutlineFacebook, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Contact() {
  return (
    <div className="contact" id='contact'>
      <h1 className='title'>Contact Us</h1>
      <Container className='contact-container'>
        <Row>
          <Col className='contact-info'>
            <h3>Address</h3>
            <p>4098 Bougaineville St. Sun Valley Subd., Paranque City</p>
            <p>Philippines</p>
            <hr/>
            <h3>Email</h3>
            <p>omlhrp.sunvalley2019@gmail.com</p>
            <h3>Phone</h3>
            <p>8823 1210 | 0915 106 1702</p>
            <hr/>

           <AiOutlineFacebook className='icon' style={{fontSize:'3rem'}}/>
           <AiOutlineInstagram className='icon' style={{fontSize:'3rem'}}/>
           <AiFillTwitterSquare className='icon' style={{fontSize:'3rem'}}/>
          
          </Col>
          <Col className='contact-input'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="name" placeholder="Full Name..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email..." />
              </Form.Group>

              <Form.Group>
                <Form.Control className='form-textarea' as="textarea" aria-label="With textarea" placeholder="Message..." />
              </Form.Group>

              <Button variant="primary" type="submit" className='contact-button'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>  
    </div>
  )
}

export default Contact;