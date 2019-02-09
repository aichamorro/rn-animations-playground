import React from "react";
import LoadingList from "./src/LoadingList";
import CardView from "./src/CreditCard/FlipOnTouch";
import { SafeAreaView, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <CardView
          scale={0.9}
          creditCardNumber="4111 1111 1111 1111"
          localizedLabels={{
            expiryDate: "MM/YY"
          }}
          visibleFace="front"
        />
      </SafeAreaView>
    );
  }
}
