import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useState } from "react";
import { mockData } from "./mock";

function App() {
  const [allImages, setAllImages] = useState([]);
  const handleClick = async (source) => {
    const check = allImages.includes(source);
    if (check) {
      const id = allImages.indexOf(source);
      let newArr = allImages;
      newArr.splice(id, 1);
      setAllImages([...newArr]);
    } else {
      allImages.push(source);
      setAllImages([...allImages]);
    }
  };
  return (
    <Container>
      <Row>
        {mockData.map((data, index) => (
          <Col md={4} key={index}>
            <div className="img-card" onClick={() => handleClick(data.src)}>
              <Image
                style={{ width: "300px", height: "300px" }}
                thumbnail
                src={data.src}
              />
              {allImages.includes(data.src) ? (
                <div className="img-checked">Selected</div>
              ) : null}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default App;
