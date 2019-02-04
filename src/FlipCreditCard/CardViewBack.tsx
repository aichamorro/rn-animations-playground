import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import style from "./style";
import { CardInformationContainer } from "./CardViewFront";

interface CreditCardViewBackProps {
  cvc: string;
  cardHolderName: string;
  expiryDate: string;
  style?: StyleProp<ViewStyle>;
}

export default function CreditCardViewBack(props: CreditCardViewBackProps) {
  const { cvc, cardHolderName, expiryDate, style: externalStyle } = props;

  return (
    <View style={[style.cardView, externalStyle]}>
      <View style={style.cardViewBackStripe} />
      <View style={style.cardViewBackCVCContainer}>
        <Text style={style.cardViewBackCVCText}>{cvc}</Text>
      </View>
      <CardInformationContainer
        style={style.cardInformationContainerReverse}
        cardHolderName={cardHolderName}
        expiryDate={expiryDate}
        textStyle={style.cardInformationContainerReverseText}
      />
    </View>
  );
}
