import React from "react";
import Product from "../components/Product";
import products from "../products";
function HomeScreens() {
  return (
    <div>
      <h1>Nouveauté</h1>
      <div className="row">
        {products.map((product) => (
          <div
            className="col col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2 g-1"
            key={product._id}
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreens;
