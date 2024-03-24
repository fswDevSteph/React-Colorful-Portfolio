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
          {
            <Image id="prof-img" src="https://media.licdn.com/dms/image/D4E03AQFfQP_Ag492sA/profile-displayphoto-shrink_800_800/0/1711241424452?e=1717027200&v=beta&t=2Sn9D45P6zaYUzTwkcsmtjRWSURBbS3Jk8ncjg4m75Q" roundedCircle />
         }
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