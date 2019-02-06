import React from "react";
import LoadingList from "./src/LoadingList";
import FlipCreditCard from "./src/FlipCreditCard";

export default class App extends React.Component {
  render() {
    return (
      <FlipCreditCard
        creditCardName="ALBERTO CHAMORRO"
        creditCardNumber="4242 4242 4242 4242"
        expiryDate="07/20"
        cvc="629"
      />
    );
  }
}
