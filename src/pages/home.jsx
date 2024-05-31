import'../style/home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Home(){
    return(
       
      <>
      <div className="bgcontainer">
       {/* <div className='leftcontainer'>
         <h1>
          FIND CLOTHES <br /> THAT MATCHS <br /> YOUR STYLE
         </h1>
       </div>
       <div className='rightcontainer'>

       </div> */}
       <Container >
      <Row>
        <Col>
        <Container className='leftcontainer'>
        <Col className='headtext'>
        <h1>
          FIND CLOTHES THAT MATCHS <br /> YOUR STYLE
         </h1>
         <Button variant="dark">SHOP NOW</Button>
  
        </Col>
        <Row className='para'>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        </Row>
        <Row>
          <Col>
          <h1 className='headtext'>200+</h1>
          <p className='para'>International Brands</p>
          </Col>
          <Col>
          <h1 className='headtext'>2000+</h1>
          <p className='para'>High Quality Products</p>
          </Col>
          <Col>
          <h1 className='headtext'>30,000+</h1>
          <p className='para'>Happy Customers</p>
          </Col>
          
        </Row>
        </Container>
        </Col>
        <Col></Col>
      </Row>
</Container>
      </div>


      
   
      </>
       
    )
}
export default Home;