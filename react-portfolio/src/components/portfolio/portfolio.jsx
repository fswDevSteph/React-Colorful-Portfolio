import { Row, Col, Card } from 'react-bootstrap';
import './portfolio.css'


function Portfolio() {
  return (

<section className='section-background-turq  section-padding relative  '>
 <div class="custom-shape-divider-top-1711386641">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <div>
     <div className='top-space'></div>
<Row>
 
 <Col md={4}>
  
    {/*card1 */}
    <Card className='card-spacing' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">GitHub</Card.Link>
        <Card.Link href="#">Deployed</Card.Link>
      </Card.Body>
    </Card>
</Col>
       {/*card2 */}
 <Col md={4}>
    <Card className='card-spacing' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">GitHub</Card.Link>
        <Card.Link href="#">Deployed</Card.Link>
      </Card.Body>
    </Card>
     </Col>
  {/*card3 */}
<Col md={4}>
    <Card className='card-spacing' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">GitHub</Card.Link>
        <Card.Link href="#">Deployed</Card.Link>
      </Card.Body>
    </Card>
</Col>
 {/*card4 */}
<Col md={4}>
    <Card className='card-spacing' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">GitHub</Card.Link>
        <Card.Link href="#">Deployed</Card.Link>
      </Card.Body>
    </Card>
</Col>
     {/*card5 */}
<Col md={4}>
    <Card className='card-spacing' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">GitHub</Card.Link>
        <Card.Link href="#">Deployed</Card.Link>
      </Card.Body>
    </Card>
</Col>
     {/*card6 */}
<Col md={4}>
    <Card className='card-spacing' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">GitHub</Card.Link>
        <Card.Link href="#">Deployed</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <div className='bottom-space'></div>
    </Row>

    </div>
    
    <div class="custom-shape-divider-bottom-1711347418">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </section>
   
   
  );
 
}


export default Portfolio;