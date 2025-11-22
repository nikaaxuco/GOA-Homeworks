import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <img
          src="/b82cfadc-ef97-4905-badc-fd48bac8950c.png"
          alt="Perfume"
          className="card-image"
        />
        <div className="card-content">
          <p className="card-category">PERFUME</p>
          <h2 className="card-title">Gabrielle Essence Eau De Parfum</h2>
          <p className="card-description">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="card-price-section">
            <span className="card-price">$149.99</span>
            <span className="card-old-price">$169.99</span>
          </div>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
