import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({img,titl}) {
  return (
    <Card style={{ width: '18rem',margin:"10px",padding:"15px"}}>
      <Card.Img variant="top" src={img} style={{height:"200px",overflow:"hidden"}} />
      <Card.Body>
        <Card.Title style={{height:"100px",overflow:"hidden"}}>{titl}</Card.Title>
        <div>
        <Card.Text>
          Some quick example text to build 
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;