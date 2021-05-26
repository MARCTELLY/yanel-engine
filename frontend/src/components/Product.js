import React, { Component } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card m-.2 p-.2">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.image}
            class="card-img-top img-fluid mx-auto d-block"
            style={{ width: "250px", height: "250px", "object-fit": "cover" }}
            alt={product.image}
          />
        </Link>
        <div class="card-body">
          <Link to={`/products/${product._id}`}>
            <h5 class="card-title">{product.name}</h5>
          </Link>
          <div className="my-3">
            <Rating
              value={product.rating}
              text={product.numReview}
              color={"#f8e825"}
            />
          </div>
          <div class="card-text">
            <h3 className="col">{product.price}€</h3>
          </div>
        </div>
      </div>
    );
  }
}
