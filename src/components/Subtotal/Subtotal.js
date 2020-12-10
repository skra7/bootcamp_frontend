import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getbasketTotal } from "../../reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :
              <strong>&#8377; {`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
