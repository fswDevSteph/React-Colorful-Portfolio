import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './aboutme.css'
import profileImage from './aboutme-img/stephanieperroni.png';

function Aboutme() {
  return (
    <section className='about-me'>
        
    <Container className="full-width-container"> 
        
      <Row>
        
        <Col xs={6} md={4}>
          {
            <Image id="prof-img" alt='image of stephanie perroni' src={profileImage} roundedCircle />
         }
        </Col>
      

        
       <Col className="about-text">
        <h2>About </h2>
       <p className="about-text">Stephanie Perroni embodies an insatiable thirst for knowledge and innovation. With a rich background encompassing roles as a social media manager, quality assurance analyst, and full-stack software developer specializing in the MERN stack, Stephanie's journey is marked by versatility and expertise.
       <br />
       <br />
       Beyond her technical expertise, Stephanie is known for her collaborative spirit and her unique talent for explaining intricate concepts through engaging analogies. Her ability to communicate complex ideas with clarity and enthusiasm fosters deeper understanding and promotes cohesive teamwork within diverse projects.
       <br />
       <br />
       As Stephanie continues her journey in the IT space, she remains driven by a desire to make impactful contributions and drive positive change.  Fueled by a relentless pursuit of creativity and a steadfast commitment to continuous learning, she stands poised to not only contribute to the future of technology but also to ignite inspiration among her peers.
       </p>
       </Col>
      </Row>
    </Container>
    </section>
    
  );
}

export default Aboutme;