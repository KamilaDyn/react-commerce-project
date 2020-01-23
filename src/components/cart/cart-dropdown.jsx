import React from "react";

import CustomButtom from "../custom-button/custom-button";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButtom
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButtom>
  </div>
);

const mapStateProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateProps)(CartDropdown));
