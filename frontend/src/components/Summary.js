// src/components/Summary.js
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Summary = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Card className="mb-0" style={{ marginRight: '20px', padding: '10px' }}>
      <Card.Text>
        <strong>Total Items:</strong> {totalItems}
      </Card.Text>
      <Card.Text>
        <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
      </Card.Text>
    </Card>
  );
};

export default Summary;
