import React from "react";
import LoadingList from "./src/LoadingList";
import CardView from "./src/CreditCard/FlipCreditCard";
import { View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justfiyContent: "center",
          alignItems: "center"
        }}
      >
        <CardView
          style={{ transform: [{ scale: 0.9 }] }}
          creditCardNumber="4111 1111 1111 1111"
          localizedLabels={{
            expiryDate: "MM/YY"
          }}
          visibleFace="front"
        />
      </View>
    );
  }
}
