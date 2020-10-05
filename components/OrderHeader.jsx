import React from "react";
import styled from "styled-components";
import { Brown } from "./styled/Brown";
import { Grey } from "./styled/Grey";
import { Pointer } from "./styled/Pointer";
// import PhoneIcon from "./icons/PhoneIcon";
// import MoreIcon from "./icons/MoreIcon";

const OrderDetailsHeader = styled.div`
  padding: 1rem 2rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9e9e9e;
`;

const OrderRef = styled.div`
  display: flex;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: 2.5rem;
  border-radius: 5px;
  margin-right: 1rem;
`;

const PhoneIcon = styled(Pointer)`
  background-color: #724a20;
  padding: 0.3rem;
  border-radius: 50%;
  display: flex;
`;

const OrderHeader = ({ order }) => {
  const orderPrice = (orderItems) => {
    let price = 0;
    orderItems && orderItems.map((item) => (price += item.price));
    return price;
  };

  return (
    <OrderDetailsHeader>
      <OrderRef className='order-details__ref'>
        <BrandLogo
          src='https://files-bocui07th.vercel.app/download%20(1).png'
          alt='brand logo'
          className='brand-logo'
        />
        <h3>Commande #{order.reference}</h3>
      </OrderRef>
      <div className='order-details__items'>
        {order.orderItems ? order.orderItems.length : 0} items
      </div>
      <div className='order-details__price'>
        {orderPrice(order.orderItems)} TND
      </div>
      <div className='order-details__restaurant'>
        <div className='h5'>Restaurant</div>
        <Brown>{order.restaurant && order.restaurant.name}</Brown>
      </div>
      <div className='order-details__time'>
        <div className='h5'>A livrer en</div>
        <Brown>
          32 min{" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#724A20'
            width='18px'
            height='18px'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
          </svg>
        </Brown>
      </div>
      <PhoneIcon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='white'
          width='18px'
          height='18px'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
        </svg>
      </PhoneIcon>
      <Pointer>
        {" "}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='#724A20'
          width='18px'
          height='30px'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
        </svg>
      </Pointer>
    </OrderDetailsHeader>
  );
};

export default OrderHeader;
