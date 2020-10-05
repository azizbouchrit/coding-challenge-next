import React, { useState } from "react";
import styled from "styled-components";
import { Black } from "./styled/Black";
import { Grey } from "./styled/Grey";
import ListItem from "./styled/ListItem";
import { SectionContainer } from "./styled/SectionContainer";
import { gql, useQuery } from '@apollo/client';

const StyledSection = styled(SectionContainer)`
  padding: 1.5rem 0;
`;
const StyledH3 = styled.h3`
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;
const StyledP = styled.p`
  color: #9e9e9e;
  margin: 0.5rem 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      reference
      status
      orderItems{
        id
      }
      restaurant{
        fullAddress
      }
      customer{
        fullAddress
        name
      }
    }
  }
`;

const DeliveryList = (props) => {
  const { loading, error, data } = useQuery(GET_ORDERS);


  const enAttente = (orderStatus) => {
    return ["NEW", "PREPARING", "READY_FOR_PICKUP"].includes(orderStatus);
  };

  const enCours = (orderStatus) => {
    return ["PICKED_UP", "EN_ROUTE"].includes(orderStatus);
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const {orders} = data
  console.log(data);
  return (
    <StyledSection>
      <StyledH3>Les Livraisons</StyledH3>
      <div>
        <StyledP>
          En attente d'action
          <Black>
            ({orders.filter((order) => enAttente(order.status)).length}){" "}
          </Black>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        </StyledP>
        <ul>
          {orders
            .filter((order) => enAttente(order.status))
            .map((order) => (
              <ListItem
                key={order.id}
                onClick={() => props.setSelectedOrder(order)}
              >
                <span className='order-reference'>#{order.reference}</span>
                <Grey className='order-items'>
                  {order.orderItems.length} items
                </Grey>
                <Grey className='order-time'>20 min.</Grey>
              </ListItem>
            ))}
        </ul>
      </div>
      <div>
        <StyledP>
          En cours{" "}
          <Black>
            ({orders.filter((order) => enCours(order.status)).length})
          </Black>
        </StyledP>
        <ul>
          {orders
            .filter((order) => enCours(order.status))
            .map((order) => (
              <ListItem
                key={order.id}
                onClick={() => props.setSelectedOrder(order)}
              >
                <span>#{order.reference}</span>
                <Grey>{order.orderItems.length} items</Grey>
                <Grey>20 min.</Grey>
              </ListItem>
            ))}
        </ul>
      </div>
    </StyledSection>
  );
};

export default DeliveryList;
