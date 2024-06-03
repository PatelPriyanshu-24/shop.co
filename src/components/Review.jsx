// import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import RatingPage from './rating';


const Reviewdata=[{
    name: 'Sarah M',
    rating: <RatingPage/>,
    feedback:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  
  
  },{
    name: 'Alex K',
    feedback:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: <RatingPage/>,
    
  
  },
  {
    name: 'James L',
    feedback:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: <RatingPage/>,
   
  
  },
  ]

function Review (){


  
return(
    <Carousel>
    <Carousel.Item>
    <Row xs={1} md={3} className="g-4">
    {Reviewdata.map((idx) => (
      <Col key={idx}>
        <Card >
          <Card.Body>
            <Card.Title>{idx.name}</Card.Title>
            <Card.Text>
              <span>{idx.rating}</span>
             <h5>{idx.feedback}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
    </Carousel.Item>
    <Carousel.Item>
    <Row xs={1} md={3} className="g-4">
    {Reviewdata.map((idx) => (
      <Col key={idx}>
        <Card >
          <Card.Body>
            <Card.Title>{idx.name}</Card.Title>
            <Card.Text>
              <span>{idx.rating}</span>
             <h5>{idx.feedback}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
     
    </Carousel.Item>
    <Carousel.Item>
    <Row xs={1} md={3} className="g-4">
    {Reviewdata.map((idx) => (
      <Col key={idx}>
        <Card >
          <Card.Body>
            <Card.Title>{idx.name}</Card.Title>
            <Card.Text>
              <span>{idx.rating}</span>
             <h5>{idx.feedback}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
   
    </Carousel.Item>
  </Carousel>
)
}
export default Review