import React from "react";

const CartOrderSummary = ({ total }) => {
  return (
    <div className="order-summary-div">
      <p className="total-p">${total}</p>
      <button>Checkout</button>
    </div>
  );
};

export default CartOrderSummary;
