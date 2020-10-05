import React from "react";
import OrderBody from "./OrderBody";
import OrderHeader from "./OrderHeader";
import { Hr } from "./styled/Hr";
import { SectionContainer } from "./styled/SectionContainer";

const OrderDetails = ({ selectedOrder: order }) => {
  return (
    <SectionContainer>
      <OrderHeader order={order} />
      <Hr />
      <OrderBody order={order} />
    </SectionContainer>
  );
};

export default OrderDetails;
