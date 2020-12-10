import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ item }) {
  const [{}, disptach] = useStateValue();
  const removeFromBasket = () => {
    // remove item from basket
    disptach({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={item.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{item.name}</p>
        <p className="checkoutProduct__price">
          <small>&#8377;</small>
          <strong>{item.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(item.rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
