import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { products } = this.props;
    return (
      <div>
        <h4>PRODUCTS</h4>
        <div className="Products">
          {products
            ? products.map((product, i) => (
                <div key={i} className="product-card">
                  <h6>
                    {i + 1}.{product.name}
                  </h6>
                  <p>Weight : {product.weight} </p>
                  <p>Availability: {product.availability}</p>
                  {product.isEditable ? (
                    <button>
                      <Link to={`/edit-product/${i}`}>Edit</Link>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default withRouter(connect(mapStateToProps)(Products));
