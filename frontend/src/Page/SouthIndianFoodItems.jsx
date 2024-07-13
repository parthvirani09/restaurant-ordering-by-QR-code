// src/Page/FoodItems.js
import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const southIndianFoodItems = [
  { id: 1, name: 'Dosa', description: 'Crispy rice pancake', imageUrl: 'dosa.jpg',price : 10 },
  { id: 2, name: 'Idli', description: 'Steamed rice cakes', imageUrl: 'idli.jpg',price : 10 },
  { id: 3, name: 'Vada', description: 'Savory fried doughnuts', imageUrl: 'vada.jpg',price : 10  },
  { id: 4, name: 'Upma', description: 'Savory semolina porridge', imageUrl: 'upma.jpg',price : 10  },
  { id: 5, name: 'Sambar', description: 'Spicy lentil soup', imageUrl: 'sambar.jpg',price : 10  },
  { id: 6, name: 'Rasam', description: 'Spicy tamarind soup', imageUrl: 'rasam.jpg',price : 10 },
  { id: 7, name: 'Pongal', description: 'Rice and lentil dish', imageUrl: 'pongal.jpg',price : 10  },
  { id: 8, name: 'Bisi Bele Bath', description: 'Spicy rice and lentil dish', imageUrl: 'bisibelebath.jpg',price : 10  },
  { id: 9, name: 'Avial', description: 'Mixed vegetable curry', imageUrl: 'avial.jpg',price : 10  },
  { id: 10, name: 'Puttu', description: 'Steamed rice flour and coconut', imageUrl: 'puttu.jpg' ,price : 10 },
];

const FoodItems = () => {
  const { addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(southIndianFoodItems.reduce((acc, item) => {
    acc[item.id] = 0;
    return acc;
  }, {}));

  
  const handleAddToCart = (item) => {
    if (quantity[item.id] > 0) {
    addToCart(item, quantity[item.id]);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [itemId]: prevQuantity[itemId] + 1
    }));
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [itemId]: prevQuantity[itemId] > 0 ? prevQuantity[itemId] - 1 : 0
    }));
    decreaseQuantity(itemId);
  };

  return (
    <Container>
      <Row>
        {southIndianFoodItems.map((item) => (
          <Col key={item.id} sm={12} md={4} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Form.Group controlId={`quantity-${item.id}`} className="mb-3">
                  <Form.Label>Quantity:</Form.Label>
                  <div className="d-flex align-items-center">
                    <Button size="sm" variant="secondary" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                    <Form.Control
                      type="number"
                      value={quantity[item.id]}
                      onChange={(e) => setQuantity({ ...quantity, [item.id]: parseInt(e.target.value) || 1 })}
                      className="mx-2 text-center"
                      style={{ width: '50px' }}
                    />
                    <Button size="sm" variant="secondary" onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
                  </div>
                </Form.Group>
                <Button onClick={() => handleAddToCart(item)} variant="primary" className="w-100">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodItems;
