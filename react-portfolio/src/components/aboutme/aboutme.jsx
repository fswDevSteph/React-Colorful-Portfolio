import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './aboutme.css'

function Aboutme() {
  return (
    <section className='about-me top-of-section-spacing'>
        
    <Container>
        
      <Row>
        
        <Col xs={6} md={4}>
          {
            <Image id="prof-img" src="https://media.licdn.com/dms/image/D4E03AQFfQP_Ag492sA/profile-displayphoto-shrink_800_800/0/1711241424452?e=1717027200&v=beta&t=2Sn9D45P6zaYUzTwkcsmtjRWSURBbS3Jk8ncjg4m75Q" roundedCircle />
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