import React from "react";
import { View, Text, Image, StyleProp, ViewStyle } from "react-native";
import style from "./style";

interface CreditCardViewFrontProps {
  cardHolderName: string;
  number: string;
  expiryDate: string;
  style: StyleProp<ViewStyle>;
}

export default function CreditCardViewFront(props: CreditCardViewFrontProps) {
  const { cardHolderName, number, expiryDate, style: externalStyle } = props;

  return (
    <View style={[style.cardView, externalStyle]}>
      <Image
        style={style.cardViewFrontBrandIcon}
        source={require("./assets/visa-icon.png")}
      />
      <Text style={[style.cardViewText, style.cardViewFrontCardNameText]}>
        {cardHolderName}
      </Text>
      <Text style={[style.cardViewText, style.cardViewFrontNumberText]}>
        {number}
      </Text>
      <View style={style.cardViewFrontExpiration}>
        <Text style={[style.cardViewText, style.cardViewFrontExpiryLabel]}>
          MM/YY
        </Text>
        <Text style={style.cardViewText}>{expiryDate}</Text>
      </View>
    </View>
  );
}
