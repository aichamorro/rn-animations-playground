import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import style, {
  CardBackgroundColorStart,
  CardBackgroundColorEnd
} from "./style";
import { CardInformationContainer } from "./CardViewFront";
import { LinearGradient } from "expo";

interface CreditCardViewBackProps {
  cvc: string;
  cardHolderName: string;
  expiryDate: string;
  style?: StyleProp<ViewStyle>;
}

export default function CreditCardViewBack(props: CreditCardViewBackProps) {
  const { cvc, cardHolderName, expiryDate, style: externalStyle } = props;

  return (
    <LinearGradient
      colors={[CardBackgroundColorStart, CardBackgroundColorEnd]}
      style={[style.cardView, externalStyle]}
    >
      <View style={style.cardViewBackStrip} />
      <View style={style.cardViewBackCVCContainer}>
        <Text style={style.cardViewBackCVCText}>{cvc}</Text>
      </View>
      <CardInformationContainer
        style={style.cardInformationContainerReverse}
        cardHolderName={cardHolderName}
        expiryDate={expiryDate}
        textStyle={style.cardInformationContainerReverseText}
      />
    </LinearGradient>
  );
}
