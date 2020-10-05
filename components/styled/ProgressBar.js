import styled, { css } from "styled-components";

export const ProgressBar = styled.ul`
  counter-reset: step;
`;
export const ProgressItem = styled.li.attrs(props => ({
    className : props.className
}))`
  list-style-type: none;
  width: 25%;
  float: left;
  position: relative;
  text-align: center;
  color: #dfdfdf;
  margin: 4rem 0 2rem;

  &:after {
    width: 30px;
    height: 30px;
    content: counter(step);
    counter-increment: step;
    line-height: 30px;
    border: 2px solid #dfdfdf;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: calc(50% - 17px);
    bottom: 15px;
  }

  &:before {
    width: calc(100% - 30px);
    height: 5px;
    content: "";
    position: absolute;
    background-color: #dfdfdf;
    top: -24px;
    left: calc(-50% + 17px);
    z-index: 0;
  }

  &:first-child:before {
    content: none;
  }


  &.active {
    color: #724A20;
}
&.active:after {
    border-color: #724A20;
    background-color: #724A20;
    color: #fff;
}
&.active:before {
    background-color: #724A20;
}

& .inactive:before {
    background-color: #DFDFDF !important;
}
`;
