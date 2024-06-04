import "../style/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RatingPage from "../components/rating";
import Review from "../components/Review";
import { useNavigate } from "react-router-dom";

const NewArrivals = [
  {
    name: "T-SHIRT WITH TAPE",
    price: "$120",
    rating: <RatingPage />,
    url: "/src/assets/NA1.png",
  },
  {
    name: "SKINNY FIT JEANS",
    price: "$180",
    rating: <RatingPage />,
    url: "/src/assets/NA2.png",
  },
  {
    name: "CHECKERED SHIRT",
    price: "$100",
    rating: <RatingPage />,
    url: "/src/assets/NA3.png",
  },
  {
    name: "SLEEVE STRIPED T-SHIRT",
    price: "$200",
    rating: <RatingPage />,
    url: "/src/assets/NA4.png",
  },
];

const Topselling = [
  {
    name: "VERTICAL STRIPED SHIRT",
    price: "$120",
    rating: <RatingPage />,
    url: "/src/assets/TP1.png",
  },
  {
    name: "COURAGE T-SHIRT",
    price: "$180",
    rating: <RatingPage />,
    url: "/src/assets/TP2.png",
  },
  {
    name: "LOOSE BERMUDA SHORTS",
    price: "$100",
    rating: <RatingPage />,
    url: "/src/assets/TP3.png",
  },
  {
    name: "FADED SKINNY JEANS",
    price: "$200",
    rating: <RatingPage />,
    url: "/src/assets/TP4.png",
  },
];

function Home() {
  const navigate = useNavigate();

  const productpage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bgcontainer">
        <Container>
          <Row>
            <Col>
              <Container className="leftcontainer">
                <Col className="headtext">
                  <h1>
                    FIND CLOTHES THAT MATCHS <br /> YOUR STYLE
                  </h1>
                  <Button variant="dark">SHOP NOW</Button>
                </Col>
                <Row className="para">
                  <p>
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                  </p>
                </Row>
                <Row>
                  <Col xs={1} md={5}>
                    <h1 className="headtext">200+</h1>
                    <p className="para">International Brands</p>
                  </Col>
                  <Col>
                    <h1 className="headtext">2000+</h1>
                    <p className="para">High Quality Products</p>
                  </Col>
                  <Col>
                    <h1 className="headtext">30,000+</h1>
                    <p className="para">Happy Customers</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <div className="brands">
        <Row>
          <Col>
            <p className="brandsName">VERSACE</p>
          </Col>
          <Col>
            <p className="brandsName">ZARA</p>
          </Col>
          <Col>
            <p className="brandsName">GUCCI</p>
          </Col>
          <Col>
            <p className="brandsName">PARADA</p>
          </Col>
          <Col>
            <p className="brandsName">Calvin Klein</p>
          </Col>
        </Row>
      </div>
      <div className="NewArrivals" id="NewArrivals">
        <h1 className="header">NEW ARRIVALS</h1>
        <div className="conatiner">
          <Row xs={1} md={4} className="g-4">
            {NewArrivals.map((idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={idx.url}
                    height={295}
                    width={290}
                  />
                  <Card.Body>
                    <Card.Title>{idx.name}</Card.Title>
                    <Card.Text>
                      <span>{idx.rating}</span>
                      <h5>{idx.price}</h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="button">
          <Button variant="dark" onClick={productpage}>
            VIEW ALL
          </Button>
        </div>
      </div>

      <div className="NewArrivals" id="Topsaleing">
        <h1 className="header">TOP SELLING</h1>
        <div className="conatiner">
          <Row xs={1} md={4} className="g-4">
            {Topselling.map((idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={idx.url}
                    height={295}
                    width={290}
                  />
                  <Card.Body>
                    <Card.Title>{idx.name}</Card.Title>
                    <Card.Text>
                      <span>{idx.rating}</span>
                      <h5>{idx.price}</h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="button">
          <Button variant="dark" onClick={productpage}>
            VIEW ALL
          </Button>
        </div>
      </div>
      <div className="container2">
        <div className="c2a">
          <h1 className="header2">BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="c2b">
          <Container>
            <Row className="DSrow">
              <Col>
                <div className="DScol1 dscol" onClick={productpage}>
                  <h2 className="DStext">Casual</h2>
                </div>
              </Col>
              <Col>
                <div className="DScol2 dscol" onClick={productpage}>
                  <h2 className="DStext">Formal</h2>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="DSrow">
              <Col>
                <div className="DScol3 dscol" onClick={productpage}>
                  <h2 className="DStext">Party</h2>
                </div>
              </Col>
              <Col>
                <div className="DScol4 dscol" onClick={productpage}>
                  <h2 className="DStext">Gym</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="Review">
        <div className="headerReview">
          <h1> OUR HAPPY CUSTOMERS</h1>
        </div>
        <div className="feedback">
          <Review />
        </div>
      </div>
    </>
  );
}
export default Home;
