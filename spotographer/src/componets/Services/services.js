import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import s1 from '../../images/s1.jpg';
import s2 from '../../images/s2.jpg';
import s3 from '../../images/s3.jpg';
import "./Services.css";



const Services =()=>{
  return(
    
  <section className="services-area mb-5"> 
    
    <Container>
    <h3 className='text-center'>MY Services</h3>
      <Row>
        <Col lg={4}>
          <div className='single-service'>
          <img src={s1} className="w-100" alt=""/>
            <h3>Sports</h3>
            <h5>Price: $350</h5>
            <p>lorem ispsiam</p>
            <Button variant="secondary">Secondary</Button>{' '}
          </div>
        </Col>
        <Col lg={4}>
          <div className='single-service'>
          <img src={s2} className="w-100" alt=""/>
            <h3>Sports</h3>
            <h5>Price: $350</h5>
            <p>lorem ispsiam</p>
            <Button variant="secondary">Secondary</Button>{' '}
          </div>
        </Col>
        <Col lg={4}>
          <div className='single-service'>
          <img src={s3} className="w-100" alt=""/>
            <h3>Sports</h3>
            <h5>Price: $350</h5>
            <p>lorem ispsiam</p>
            <Button variant="secondary">Secondary</Button>{' '}
          </div>
        </Col>
       
      </Row>
    </Container>

    
  </section>

  );
};

export default Services;