import { Row, Col, Card } from 'react-bootstrap';
import './portfolio.css'


function Portfolio() {
  return (

<section className='section-background-turq  padding-top padding-bottom  '>
 
    <div>
      
<Row >
 
   
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
    
    </Row>

    </div>
    
    </section>
   
   
  );
 
}


export default Portfolio;