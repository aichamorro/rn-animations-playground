import React from "react";
import LoadingList from "./src/LoadingList";
import FlipCreditCard from "./src/FlipCreditCard";

export default class App extends React.Component {
  render() {
    return (
      <FlipCreditCard
        localizedLabels={{
          expiryDate: "MM/YY"
        }}
      />
    );
  }
}
