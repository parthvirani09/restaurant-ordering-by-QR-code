import React from 'react';
import { Link } from "react-router-dom";

export default function Home_Page_card() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-primary">
            <div className="card-header">South Indian</div>
            <div className="card-body">
              <Link className="nav-link" to="/south-indian">
                <h5 className="card-title">South Indian</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-secondary">
            <div className="card-header">Chinese</div>
            <div className="card-body">
              <Link className="nav-link" to="/chinese">
                <h5 className="card-title">Chinese</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-success">
            <div className="card-header">Punjabi</div>
            <div className="card-body">
              <Link className="nav-link" to="/punjabi">
                <h5 className="card-title">Punjabi</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-danger">
            <div className="card-header">Pizza</div>
            <div className="card-body">
              <Link className="nav-link" to="/pizza">
                <h5 className="card-title">Pizza</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-warning">
            <div className="card-header">Header</div>
            <div className="card-body">
              <Link className="nav-link" to="/warning">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-info">
            <div className="card-header">Header</div>
            <div className="card-body">
              <Link className="nav-link" to="/info">
                <h5 className="card-title">Info card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-bg-light">
            <div className="card-header">Header</div>
            <div className="card-body">
              <Link className="nav-link" to="/light">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-bg-dark">
            <div className="card-header">Header</div>
            <div className="card-body">
              <Link className="nav-link" to="/dark">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
