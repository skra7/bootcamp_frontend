import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, name, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        name,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div id={id} key={id} className="product">
      <div className="product__info">
        <p>{name}</p>
        <p className="product__price">
          <strong>&#8377; {price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
