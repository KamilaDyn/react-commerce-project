import React from "react";

import CustomButtom from "../custom-button/custom-button";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButtom> GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateProps)(CartDropdown);
