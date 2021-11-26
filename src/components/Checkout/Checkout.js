import "./checkout.scss"
import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { ApplePayButton } from "react-apple-pay-button";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = ( props ) => {
  return (
  <div className="checkout-container">
      <div className="checkout">
        <ApplePayButton className="btn apple-pay" theme="dark">{""}</ApplePayButton>
        <h3 className="card-option-text">Or pay with card</h3>
        <CheckoutForm price={props.price}></CheckoutForm>
      </div>
    </div>
  )
}


Checkout.propTypes = {
  siteTitle: PropTypes.string,
}

Checkout.defaultProps = {
  siteTitle: ``,
}

export default Checkout