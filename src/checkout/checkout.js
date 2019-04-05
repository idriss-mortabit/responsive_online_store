import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import axios from "axios";

const Checkout = (props) =>  {

  const onToken = token => {
    const body = {
      amount: props.totalPrice,
      items: props.cartItems,
      token: token
  };
  axios
      .post("api/get/orders", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
    return (
      <StripeCheckout
      style={{width:"100px", height:"30px", marginTop:"12px"}}
      label='Pay Now'
        amount={props.price}
        billingAddress
        description="Awesome Product"
        locale="auto"
        name="online ecommerce"
        stripeKey="pk_test_2TvkwU5Pzw4AwhCoVAkwoEbf00p4EX8wb5"
        token={onToken}
        zipCode
      />
    )
}
const mapStateToProps = state => {

  console.log(state, 'state has changed');

  return {
      cartItems: state.shop.cart,
      cartItemCount: state.shop.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
      }, 0),
      totalPrice: state.shop.cart.reduce((count, curItem) => {
          return count + (curItem.price * curItem.quantity);
      }, 0)
  }
}

export default connect(mapStateToProps, null)(Checkout);