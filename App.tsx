import React from "react";
import LoadingList from "./src/LoadingList";
import FlipCreditCard from "./src/FlipCreditCard";

export default class App extends React.Component {
  render() {
    return (
      <FlipCreditCard
        creditCardNumber="4111 1111 1111 1111"
        localizedLabels={{
          expiryDate: "MM/YY"
        }}
      />
    );
  }
}
