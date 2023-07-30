import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContaier = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: auto;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

// .empty-message {
//   font-size: 18px;
//   margin: 50px auto;
// }

//   .cart-items {
// height: 240px;
// display: flex;
// flex-direction: column;
// overflow: scroll;
// overflow-x: hidden;
//     // overflow: hidden;
//   }

//   button {
//     margin-top: auto;
//   }
// }
