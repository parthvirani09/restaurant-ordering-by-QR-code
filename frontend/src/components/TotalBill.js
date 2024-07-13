import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const TotalBill = () => {
  const { orderSummary } = useContext(CartContext);

  if (!orderSummary) {
    return (
      <Container>
        <h2>Total Bill</h2>
        <p>No order placed yet.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Total Bill</h2>
      <p>Order Date: {orderSummary.orderDate}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orderSummary.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price?.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity)?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end">Total:</td>
            <td>${orderSummary.totalAmount?.toFixed(2)}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default TotalBill;
