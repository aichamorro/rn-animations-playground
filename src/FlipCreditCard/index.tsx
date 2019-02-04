import React from "react";
import { TouchableWithoutFeedback, View, Animated } from "react-native";
import style from "./style";
import CreditCardViewFront from "./CardViewFront";
import CreditCardViewBack from "./CardViewBack";

enum Face {
  back,
  front
}

interface FlipCreditCardProps {}
interface FlipCreditCardState {
  visibleFace: Face;
}

const creditCardName = "ALBERTO CHAMORRO";
const creditCardNumber = "4242 4242 4242 4242";
const expiryDate = "07/20";
const cvc = "629";
const perpendicularAngle = 90;

export default class FlipCreditCard extends React.PureComponent<
  FlipCreditCardProps,
  FlipCreditCardState
> {
  state = { visibleFace: Face.front };
  rotation = new Animated.Value(0);

  visibilityStyle(visibleFace: Face, view: Face): any {
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

  startFlipping = () => {
    Animated.timing(this.rotation, {
      toValue: perpendicularAngle,
      useNativeDriver: true
    }).start(() => {
      this.setState(
        prevState => ({
          visibleFace: this.nextSide(prevState.visibleFace)
        }),
        () => this.endFlipping()
      );
    });
  };

  endFlipping = () => {
    Animated.timing(this.rotation, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  };

  flipSides = () => {
    this.startFlipping();
  };

  render() {
    const { visibleFace } = this.state;
    const rotation = this.rotation.interpolate({
      inputRange: [0, perpendicularAngle],
      outputRange: ["0deg", "90deg"]
    });

    return (
      <TouchableWithoutFeedback onPress={this.flipSides}>
        <Animated.View
          style={[style.container, { transform: [{ rotateY: rotation }] }]}
        >
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
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
