import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
//import Rating from "../components/Rating";
import products from "../products";

export class ProductScreen extends Component {
  render() {
    const product = products.find((p) => p._id === this.props.match.params.id);

    // svg des flèche de rétour
    const filledArrow = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-arrow-left-square-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
      </svg>
    );
    const arrowSVG = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-arrow-left-square"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg>
    );
    return (
      <div>
        <Link to="/" className="btn btn-outline-secondary my-3">
          {filledArrow || arrowSVG} Retour
        </Link>
        <div className="row">
          <div className="col left-side">
            <img
              src={product.image}
              class="rounded mx-auto d-block"
              style={{ width: "400px", height: "400px", "object-fit": "cover" }}
              alt="..."
            />
          </div>
          <div className="col right-side">
            <h3> {product.name}</h3>
            <Rating
              value={product.rating}
              text={product.numReview}
              color={"#f8e825"}
            />
            <h2>{product.price}</h2>
            <hr />
            <p>{product.description}</p>
            <button type="button" class="btn btn-success alert-success">
              Ajouter au panier{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-basket"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductScreen;
