import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <Product price={120} inStock={true} />
      <Product price={250} inStock={false} />
    </div>
  );
}

export default App;
