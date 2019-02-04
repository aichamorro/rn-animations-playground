import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import style from "./style";
import CreditCardViewFront from "./CardViewFront";
import CreditCardViewBack from "./CardViewBack";

enum Face {
  back,
  front
}

interface FlipCardProps {}
interface FlipCardState {
  visibleFace: Face;
}

const creditCardName = "ALBERTO CHAMORRO";
const creditCardNumber = "4242 4242 4242 4242";
const expiryDate = "07/20";
const cvc = "629";

export default class FlipCard extends React.PureComponent<
  FlipCardProps,
  FlipCardState
> {
  state = { visibleFace: Face.front };

  visibilityStyle(
    visibleFace: Face,
    view: Face
  ): { display: "none" } | undefined {
    if (visibleFace !== view) {
      return { display: "none" };
    }
  }

  nextSide: (face: Face) => Face = face => {
    switch (face) {
      case Face.front:
        return Face.back;
      case Face.back:
        return Face.front;
    }
  };

  flipSides = () => {
    this.setState(prevState => ({
      visibleFace: this.nextSide(prevState.visibleFace)
    }));
  };

  render() {
    const { visibleFace } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.flipSides}>
        <View style={style.container}>
          <CreditCardViewFront
            style={[
              style.cardFace,
              this.visibilityStyle(visibleFace, Face.front)
            ]}
            cardHolderName={creditCardName}
            number={creditCardNumber}
            expiryDate={expiryDate}
          />
          <CreditCardViewBack
            style={[
              style.cardFace,
              this.visibilityStyle(visibleFace, Face.back)
            ]}
            cvc={cvc}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
