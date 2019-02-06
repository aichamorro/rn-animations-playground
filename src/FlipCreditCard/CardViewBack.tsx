import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import style, {
  CardBackgroundColorStart,
  CardBackgroundColorEnd
} from "./style";
import { CardInformationContainer } from "./CardViewFront";
import { LinearGradient } from "expo";
import { CreditCardFields, CreditCardLabels } from ".";
import { addPlaceholderStyleIfNeeded } from "./common";

interface CreditCardViewBackProps {
  cvc: string;
  cardHolderName: string;
  expiryDate: string;
  style?: StyleProp<ViewStyle>;
  placeholders: CreditCardFields;
  labels: CreditCardLabels;
}

export default function CreditCardViewBack(props: CreditCardViewBackProps) {
  const {
    cvc,
    cardHolderName,
    expiryDate,
    style: externalStyle,
    placeholders,
    labels
  } = props;

  return (
    <LinearGradient
      colors={[CardBackgroundColorStart, CardBackgroundColorEnd]}
      style={[style.cardView, externalStyle]}
    >
      <View style={style.cardViewBackStrip} />
      <View style={style.cardViewBackCVCContainer}>
        <Text
          style={[style.cardViewBackCVCText, addPlaceholderStyleIfNeeded(cvc)]}
        >
          {cvc || placeholders.cvc}
        </Text>
      </View>
      <CardInformationContainer
        style={style.cardInformationContainerReverse}
        cardHolderName={cardHolderName || placeholders.creditCardName}
        expiryDate={expiryDate || placeholders.expiryDate}
        textStyle={style.cardInformationContainerReverseText}
        placeholders={placeholders}
        labels={labels}
      />
    </LinearGradient>
  );
}
