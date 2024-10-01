import React from "react";

import {
  CarDescription,
  CarName,
  CarNameCarPrice,
  CarPrice,
  Cart,
  CartCar,
  CartCarIMG,
  Cartpage,
  Description,
  Enter,
  MainCartpage,
  NameDeta,
  NameDetaIn,
  NameDetaSelect,
  OptionCart,
  Order,
  Payment,
  PaymentWR,
  Price,
  Purchase,
  PurchasePrice,
  RightCartpage,
  RightCartpage1,
} from "./cartstyle";

import { Divider } from "@mui/material";
import CartCarousel from "../carusel/carusel";

const CartComponent = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <MainCartpage>
        <Cart>Cart</Cart>
        <div>
          <Divider></Divider>
        </div>
      </MainCartpage>

      <Cartpage>
        <CartCar>
          <CartCarousel />
          <Purchase>
            {" "}
            <PurchasePrice>Purchase price</PurchasePrice> <Price>52541$</Price>
          </Purchase>
        </CartCar>
        <RightCartpage>
          <RightCartpage1>
            {" "}
            <div>
              <CarNameCarPrice>
                {" "}
                <CarName>Car Name</CarName>
                <CarPrice>550$</CarPrice>{" "}
              </CarNameCarPrice>
              <Description>Description</Description>
              <CarDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                viverra amet, tortor tristique odio scelerisque aenean sodales.
                Nunc risus dolor amet porttitor tellus
              </CarDescription>
              <Payment>
                {" "}
                <PaymentWR>Continue to payment</PaymentWR>
              </Payment>

              <Enter>Enter Account Details</Enter>
              <NameDeta>First Name</NameDeta>
              <NameDetaIn type="text" placeholder="First Name" />

              <NameDeta>Last Name</NameDeta>
              <NameDetaIn type="text" placeholder="Last Name" />

              <NameDeta>Email</NameDeta>
              <NameDetaIn type="text" placeholder="Your Email" />

              <NameDeta>Mobile Phone Number</NameDeta>
              <NameDetaIn type="text" placeholder="Mobile Phone Number" />

              <Enter>Card</Enter>
              <NameDeta>Name on card</NameDeta>
              <NameDetaIn type="text" placeholder="Name on card" />

              <NameDeta>Card Number</NameDeta>
              <NameDetaIn type="text" placeholder="Card Number" />

              <NameDeta>Expiration Month</NameDeta>
              <NameDetaSelect>
                <OptionCart>01</OptionCart>
                <OptionCart>02</OptionCart>
                <OptionCart>03</OptionCart>
              </NameDetaSelect>

              <NameDeta>Expiration Year</NameDeta>
              <NameDetaSelect>
                <OptionCart>2024</OptionCart>
                <OptionCart>2025</OptionCart>
                <OptionCart>2026</OptionCart>
              </NameDetaSelect>

              <NameDeta>CVV</NameDeta>
              <NameDetaIn type="text" placeholder="CVV" />

              <NameDeta>Billing Zip Cod</NameDeta>
              <NameDetaIn type="text" placeholder="Billing Zip Cod" />

              <Order>
                {" "}
                <PaymentWR>Place Order</PaymentWR>
              </Order>
            </div>{" "}
          </RightCartpage1>
        </RightCartpage>
      </Cartpage>
    </div>
  );
};

export default CartComponent;
