import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editProduct } from "../actions";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.products[this.props.match.params.productId],
      productId: this.props.match.params.productId
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(
      editProduct(this.state.product, this.state.productId, this.redirectUser)
    );
  };

  redirectUser = success => {
    if (success) this.props.history.push("/");
  };

  updateValue = event => {
    if (event.target.id === "isEditable") {
      this.setState({
        product: {
          ...this.state.product,
          [event.target.name]: event.target.checked
        }
      });
    } else {
      this.setState({
        product: {
          ...this.state.product,
          [event.target.name]: event.target.value
        }
      });
    }
  };

  render() {
    let pricingInfo = this.props.pricingInfo;

    return (
      <div className="product-page">
        <h4>EDIT PRODUCT</h4>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.updateValue}
            required
            id="name"
            placeholder={this.state.product.name}
          />
          <label>Weight</label>
          <input
            type="text"
            name="weight"
            onChange={this.updateValue}
            required
            id="weight"
            placeholder={this.state.product.weight}
          />
          <label>Availability</label>
          <input
            type="number"
            name="availability"
            onChange={this.updateValue}
            required
            id="availability"
            placeholder={this.state.product.availability}
          />
          <label>Product Url</label>
          <input
            type="text"
            name="productUrl"
            onChange={this.updateValue}
            required
            id="productUrl"
            placeholder={this.state.product.productUrl}
          />
          <h6>
            <b>Price Tier</b>
          </h6>
          <label>Budget</label>
          <input
            type="radio"
            name="pricingTier"
            onChange={this.updateValue}
            required
            id="productUrl"
            value="budget"
            checked={this.state.product.pricingTier === "budget"}
          />

          <label>Premier</label>
          <input
            type="radio"
            name="pricingTier"
            onChange={this.updateValue}
            required
            id="productUrl"
            value="premier"
            checked={this.state.product.pricingTier === "premier"}
          />
          <label>Price Range</label>

          <select name="dropdown">
            {pricingInfo[this.state.product.pricingTier].map(
              (priceRange, i) => {
                return (
                  <option key={i} value={priceRange}>
                    {priceRange}
                  </option>
                );
              }
            )}
          </select>
          <label>Is Editable</label>
          <input
            type="checkbox"
            name="isEditable"
            onChange={this.updateValue}
            id="isEditable"
            defaultChecked={this.state.product.isEditable}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  pricingInfo: state.pricingInfo
});

export default withRouter(connect(mapStateToProps)(EditProduct));
