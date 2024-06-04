
import React, { useEffect } from "react";
import "../style/categorypage.css";
import TuneIcon from "@mui/icons-material/Tune";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import RatingPage from "../components/rating";
import Pagination from "@mui/material/Pagination";

const Product = [
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
    name: "STRIPED T-SHIRT",
    price: "$200",
    rating: <RatingPage />,
    url: "/src/assets/NA4.png",
  },
  {
    name: "STRIPED SHIRT",
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
];

function CategoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [range, setRange] = React.useState([100, 200]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  return (
    <>
      <div className="main">
        <div className="filter">
          <div className="filtersub">
            <div className="filterheading">
              <h5>Filter</h5>
              <div className="filtericon">
                <TuneIcon />
              </div>
            </div>
            <div className="category">
              <div>
                <Checkbox />
                Men
              </div>
              <div>
                <Checkbox />
                Women
              </div>
              <div>
                <Checkbox />
                Children
              </div>
            </div>
            <div className="price">
              <div className="priceheading">
                <p>Price</p>
              </div>
              <div className="priceslider">
                <Slider
                  value={range}
                  onChange={handleChanges}
                  valueLabelDisplay="auto"
                  max={400}
                  min={100}
                />
                {range[0]}$ - {range[1]}$
              </div>
            </div>
            <div className="color">
              <div className="colorheading">
                <p>Colors</p>
              </div>
              <div className="colordot">
                <span id="dot1"></span>
                <span id="dot2"></span>
                <span id="dot3"></span>
                <span id="dot4"></span>
                <span id="dot5"></span>
                <span id="dot6"></span>
              </div>
            </div>
            <div className="size">
              <div className="sizeheading">
                <p>Size</p>
              </div>
              <div className="sizeselection">
                <span>
                  <Checkbox />S
                </span>
                <span>
                  <Checkbox />M
                </span>
                <span>
                  <Checkbox />L
                </span>
                <span>
                  <Checkbox />
                  XL
                </span>
              </div>
            </div>
            <button className="buttonfilter">Apply Filter</button>
          </div>
        </div>
        <div className="product">
          <div className="productsub">
            <div className="productheading">
              <h5>Products</h5>
            </div>
            <div className="productcontainer">
              <Row xs={1} md={3} className="g-4">
                {Product.map((product, index) => (
                  <Col key={index}>
                    <Card className="cardproduct">
                      <Card.Img
                        variant="top"
                        src={product.url}
                        height={295}
                        width={290}
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          <span>{product.rating}</span>
                          <h5>{product.price}</h5>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="paginationcontainer">
              <Pagination count={10} variant="outlined" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;






// demo code

// import "../style/categorypage.css";
// import TuneIcon from "@mui/icons-material/Tune";
// import Checkbox from "@mui/material/Checkbox";
// import Slider from "@mui/material/Slider";
// import React,{useEffect} from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import RatingPage from "../components/rating";
// import Pagination from "@mui/material/Pagination";

// const Product = [
//   {
//     name: "T-SHIRT WITH TAPE",
//     price: "$120",
//     rating: <RatingPage />,
//     url: "/src/assets/NA1.png",
//   },
//   {
//     name: "SKINNY FIT JEANS",
//     price: "$180",
//     rating: <RatingPage />,
//     url: "/src/assets/NA2.png",
//   },
//   {
//     name: "CHECKERED SHIRT",
//     price: "$100",
//     rating: <RatingPage />,
//     url: "/src/assets/NA3.png",
//   },
//   {
//     name: "STRIPED T-SHIRT",
//     price: "$200",
//     rating: <RatingPage />,
//     url: "/src/assets/NA4.png",
//   },
//   {
//     name: "STRIPED SHIRT",
//     price: "$120",
//     rating: <RatingPage />,
//     url: "/src/assets/TP1.png",
//   },
//   {
//     name: "COURAGE T-SHIRT",
//     price: "$180",
//     rating: <RatingPage />,
//     url: "/src/assets/TP2.png",
//   },
// ];

// function CategoryPage() {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [range, setRange] = React.useState([100, 200]);
//   function handleChanges(event, newValue) {
//     setRange(newValue);
//   }

//   return (
//     <>
//       <div className="main">
//         {/* first section is of filter  */}
//         <div className="filter">
//           <div className="filtersub">
//             {/* filter header section */}
//             <div className="filterheading">
//               <h5>Filter</h5>
//               <div className="filtericon">
//                 <TuneIcon />
//               </div>
//             </div>

//             {/* form here it is category section */}

//             <div className="category">
//               <div>
//                 <Checkbox />
//                 Men
//               </div>
//               <div>
//                 <Checkbox />
//                 Women
//               </div>
//               <div>
//                 <Checkbox />
//                 Children
//               </div>
//             </div>
//             {/* form here price div is starting */}

//             <div className="price">
//               <div className="priceheading">
//                 <p>Price</p>
//               </div>
//               <div className="priceslider">
//                 <Slider
//                   value={range}
//                   onChange={handleChanges}
//                   valueLabelDisplay="auto"
//                   max={400}
//                   min={100}
//                 />
//                 {range[0]}$ - {range[1]}$
//               </div>
//             </div>
//             {/* from here color section is started */}
//             <div className="color">
//               <div className="colorheading">
//                 <p>Colors</p>
//               </div>
//               <div className="colordot">
//                 <span id="dot1"></span>
//                 <span id="dot2"></span>
//                 <span id="dot3"></span>
//                 <span id="dot4"></span>
//                 <span id="dot5"></span>
//                 <span id="dot6"></span>
//               </div>
//             </div>
//             {/* form here size section is started  */}
//             <div className="size">
//               <div className="sizeheading">
//                 <p>Size</p>
//               </div>
//               <div className="sizeselection">
//                 <span>
//                   <Checkbox />S
//                 </span>
//                 <span>
//                   <Checkbox />M
//                 </span>
//                 <span>
//                   <Checkbox />L
//                 </span>
//                 <span>
//                   <Checkbox />
//                   XL
//                 </span>
//               </div>
//             </div>
//             <button className="buttonfilter">Apply Filter</button>
//           </div>
//         </div>
//         <div className="product">
//           <div className="productsub">
//             <div className="productheading">
//               <h5>Products</h5>
//             </div>
//             <div className="productcontainer">
//               <Row xs={1} md={3} className="g-4">
//                 {Product.map((idx) => (
//                   <Col key={idx}>
//                     <Card className="cardproduct">
//                       <Card.Img
//                         variant="top"
//                         src={idx.url}
//                         height={295}
//                         width={290}
//                       />
//                       <Card.Body>
//                         <Card.Title>{idx.name}</Card.Title>
//                         <Card.Text>
//                           <span>{idx.rating}</span>
//                           <h5>{idx.price}</h5>
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//             <div className="paginationcontainer">
//               <Pagination count={10} variant="outlined" color="primary" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default CategoryPage;