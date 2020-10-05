import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import DeliveryList from "../components/DeliveryList";
import OrderDetails from "../components/OrderDetails";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 25vw 55vw;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 5rem;
`;

export default function Home() {
  const [selectedOrder, setSelectedOrder] = useState({});

  return (
    <div>
      <Head>
        <title>Lablebi NextJS</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
        />
      </Head>
      <ApolloProvider client={client}>
        <MainWrapper>
          <DeliveryList setSelectedOrder={(order) => setSelectedOrder(order)} />
          <OrderDetails selectedOrder={selectedOrder} />
        </MainWrapper>
      </ApolloProvider>
    </div>
  );
}
