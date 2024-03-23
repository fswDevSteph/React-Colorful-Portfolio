import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './aboutme.css'

function Aboutme() {
  return (
    <section className='about-me'>
        
    <Container>
        
      <Row>
        
        <Col xs={6} md={4}>
          <Image id="prof-img" src="https://media.licdn.com/dms/image/D4E03AQES8prbXlYPlQ/profile-displayphoto-shrink_800_800/0/1710796497122?e=1716422400&v=beta&t=A0NbP9g5BJ-93ZHEJ9H29HBHV71zhx8B9-WkLWWNs3U" roundedCircle />
        </Col>
       <Col className="about-text">
        <h2>About </h2>
       <p className="about-text">Stephanie Perroni is a full stack software development student with 5+ years of experience as a software tester on various projects who hopes to make meaningful and positively impactful contributions in the software development space.</p>
       </Col>
      </Row>
    </Container>

    </section>
  );
}

export default Aboutme;