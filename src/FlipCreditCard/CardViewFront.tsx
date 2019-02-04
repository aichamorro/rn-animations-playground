import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle
} from "react-native";
import style from "./style";

interface CreditCardViewFrontProps {
  cardHolderName: string;
  number: string;
  expiryDate: string;
  style?: StyleProp<ViewStyle>;
}

interface CreditCardInfoContainerProps {
  cardHolderName: string;
  expiryDate: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

export function CardInformationContainer(props: CreditCardInfoContainerProps) {
  const { cardHolderName, expiryDate, textStyle, style: externalStyle } = props;

  return (
    <View style={[style.cardInformationContainer, externalStyle]}>
      <Text
        style={[style.cardViewText, style.cardViewFrontCardNameText, textStyle]}
      >
        {cardHolderName}
      </Text>
      <View style={style.cardViewFrontExpiration}>
        <Text
          style={[
            style.cardViewText,
            style.cardViewFrontExpiryLabel,
            textStyle
          ]}
        >
          MM/YY
        </Text>
        <Text style={[style.cardViewText, textStyle]}>{expiryDate}</Text>
      </View>
    </View>
  );
}

export default function CreditCardViewFront(props: CreditCardViewFrontProps) {
  const { cardHolderName, number, expiryDate, style: externalStyle } = props;

  return (
    <View style={[style.cardView, externalStyle]}>
      <Image
        style={style.cardViewFrontBrandIcon}
        source={require("./assets/visa-icon.png")}
      />
      <CardInformationContainer
        cardHolderName={cardHolderName}
        expiryDate={expiryDate}
      />
      <Text style={[style.cardViewText, style.cardViewFrontNumberText]}>
        {number}
      </Text>
    </View>
  );
}
