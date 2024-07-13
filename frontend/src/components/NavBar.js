import React from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

export default function NavBar(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/south-indian">South Indian</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chinese">Chinese</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/punjabi">Punjabi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pizza">Pizza</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food-items" onClick={scrollToTop}>Food Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/total-bill">Total Bill</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FaShoppingCart className="me-1" /> {/* Cart icon */}
                  Cart
                </Link>
              </li>
            </ul>
            {/* <li className="nav-item">
            <Link className="nav-link" to="/Summary" >Summary</Link>
              </li> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
