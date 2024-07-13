// // // src/Page/Cart.js
// import React, { useContext } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { CartContext } from '../context/CartContext';

// const Cart = () => {
//     const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  

//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//   };

//   return (
//     <Container>
//       <h2>Your Cart</h2>
//       <Row>
//         {cart.map((item) => (
//           <Col key={item.id} sm={12} md={4} lg={4}>
//             <Card className="mb-4">
//               <Card.Img variant="top" src={item.imageUrl} />
//               <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>{item.description}</Card.Text>
//                 <Card.Text>Quantity: {item.quantity}</Card.Text>
//                 <div className="d-flex align-items-center">
//                   <Button size="sm" variant="secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
//                   <div className="mx-2">{item.quantity}</div>
//                   <Button size="sm" variant="secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
//                 </div>
//                 <Button onClick={() => removeFromCart(item.id)} variant="danger" className="w-100 mt-2">Remove</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Button onClick={handlePlaceOrder} variant="success" className="w-100 mt-4">Place Order</Button>
//     </Container>
//   );
// };

// export default Cart;


// src/Page/Cart.js
// import React, { useContext } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { CartContext } from '../context/CartContext';
// import Summary from '../components/Summary';

// const Cart = () => {
//   const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//   };

//   return (
//     <Container>
//       <Summary />
//       <Row>
//         {cart.map((item) => (
//           <Col key={item.id} sm={12} md={4} lg={4}>
//             <Card className="mb-4">
//               <Card.Img variant="top" src={item.imageUrl} />
//               <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>{item.description}</Card.Text>
//                 <Card.Text>Price: ${item.price}</Card.Text>
//                 <Card.Text>Quantity: {item.quantity}</Card.Text>
//                 <div className="d-flex align-items-center">
//                   <Button size="sm" variant="secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
//                   <div className="mx-2">{item.quantity}</div>
//                   <Button size="sm" variant="secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
//                 </div>
//                 <Button onClick={() => removeFromCart(item.id)} variant="danger" className="w-100 mt-2">Remove</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Button onClick={handlePlaceOrder} variant="success" className="w-100 mt-4">Place Order</Button>
//     </Container>
//   );
// };

// export default Cart;



import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import Summary from '../components/Summary';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, placeOrder } = useContext(CartContext);

  const handlePlaceOrder = () => {
    placeOrder();
    alert('Order placed successfully!');
  };

  return (
    <Container>
      <Summary />
      <Row>
        {cart.map((item) => (
          <Col key={item.id} sm={12} md={4} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <div className="d-flex align-items-center">
                  <Button size="sm" variant="secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
                  <div className="mx-2">{item.quantity}</div>
                  <Button size="sm" variant="secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
                </div>
                <Button onClick={() => removeFromCart(item.id)} variant="danger" className="w-100 mt-2">Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button onClick={handlePlaceOrder} variant="success" className="w-100 mt-4">Place Order</Button>
    </Container>
  );
};

export default Cart;
