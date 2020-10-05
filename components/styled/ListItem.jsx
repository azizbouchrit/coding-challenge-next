import React from "react";
import styled from "styled-components";

const LiContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
  padding: 1rem 0;
`;

const StyledLi = styled.li`
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background-color: #eae4de;
  }
  &:last-of-type ${LiContainer} {
    border-bottom: none;
  }
`;

const ListItem = (props) => {
  return (
    <StyledLi {...props}>
      <LiContainer>{props.children}</LiContainer>
    </StyledLi>
  );
};

export default ListItem;
