import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
            <p>
              You have no items in your bakset. To buy one or more items click "
              Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct item={item} />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Checkout;
