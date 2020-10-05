import React from "react";
import styled from "styled-components";
import { FilledCircle } from "./styled/FilledCircle";
import { OutlinedCircle } from "./styled/OutlinedCircle";
import { Button } from "./styled/Button";
import { ProgressBar, ProgressItem } from "./styled/ProgressBar";
import MapContainer from "./MapContainer";

const Adresses = styled.div`
  font-weight: 400;
  margin: 1rem;
`;

const OrderBody = ({ order }) => {
  return (
    <div className='order-details__body'>
      <ProgressBar>
        <ProgressItem
          className={
            [
              "PREPARING",
              "READY_FOR_PICKUP",
              "PICKED_UP",
              "EN_ROUTE",
              "DELIVERED",
            ].includes(order.status)
              ? "active"
              : "inactive"
          }
        >
          En preparation
        </ProgressItem>
        <ProgressItem
          className={
            ["READY_FOR_PICKUP", "PICKED_UP", "EN_ROUTE", "DELIVERED"].includes(
              order.status
            )
              ? "active"
              : "inactive"
          }
        >
          Prêt
        </ProgressItem>
        <ProgressItem
          className={
            ["PICKED_UP", "EN_ROUTE", "DELIVERED"].includes(order.status)
              ? "active"
              : "inactive"
          }
        >
          Emporté
        </ProgressItem>
        <ProgressItem
          className={order.status === "DELIVERED" ? "active" : "inactive"}
        >
          Livré
        </ProgressItem>
      </ProgressBar>
      {/* <div className='map-container'><MapContainer order={order}/></div> */}
      <Adresses>
        <div>
          <FilledCircle />
          <span>{order.restaurant && order.restaurant.fullAddress}</span>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='#724A20'
          width='18px'
          height='30px'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
        </svg>{" "}
        <div>
          <OutlinedCircle />
          <span>{order.customer && order.customer.fullAddress}</span>
        </div>
      </Adresses>
      <Button className='btn'>Attribuer à un livreur ? </Button>
    </div>
  );
};

export default OrderBody;
