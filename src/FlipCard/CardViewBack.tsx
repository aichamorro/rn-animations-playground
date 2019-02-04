import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import style from "./style";

interface CreditCardViewBackProps {
  cvc: string;
  style?: StyleProp<ViewStyle>;
}

export default function CreditCardViewBack(props: CreditCardViewBackProps) {
  const { cvc, style: externalStyle } = props;

  return (
    <View style={[style.cardView, externalStyle]}>
      <View style={style.cardViewBackStripe} />
      <View style={style.cardViewBackCVCContainer}>
        <Text style={style.cardViewBackCVCText}>{cvc}</Text>
      </View>
    </View>
  );
}
