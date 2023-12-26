import React from "react";
import CreditCardUi from "../../components/creditCard/CreditCartd";
import { ConfirmOrderWrap, ConfirmSection } from "./ConfirmOrder.styled";

// import { useSelector } from "react-redux";
// import { totalPrice } from "../../utils/totalPrice";

const ConfirmOrder = () => {
  // const items = useSelector((state) => state.cart.itemsInCart);
  // const totalPriceee = totalPrice(items);

  return (
    <>
      <ConfirmSection>
        <ConfirmOrderWrap>
          <CreditCardUi />
          {/* <span>{totalPriceee} $</span> */}
        </ConfirmOrderWrap>
      </ConfirmSection>
    </>
  );
};

export default ConfirmOrder;
