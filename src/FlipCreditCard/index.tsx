import React from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  StyleProp,
  ViewStyle
} from "react-native";
import style from "./style";
import CreditCardViewFront from "./CardViewFront";
import CreditCardViewBack from "./CardViewBack";

enum Face {
  back,
  front
}

interface FlipCreditCardProps {
  style?: StyleProp<ViewStyle>;
  scale?: number;
}
interface FlipCreditCardState {
  visibleFace: Face;
}

const creditCardName = "ALBERTO CHAMORRO";
const creditCardNumber = "4242 4242 4242 4242";
const expiryDate = "07/20";
const cvc = "629";

const animationDuration = 200;

export default class FlipCreditCard extends React.PureComponent<
  FlipCreditCardProps,
  FlipCreditCardState
> {
  state = { visibleFace: Face.front };
  rotation = new Animated.Value(0);

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
      toValue: 1,
      duration: animationDuration / 2,
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
      duration: animationDuration / 2,
      useNativeDriver: true
    }).start();
  };

  flipSides = () => {
    this.startFlipping();
  };

  render() {
    const { scale = 0.9 } = this.props;
    const { visibleFace } = this.state;
    const rotation = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"]
    });

    return (
      <TouchableWithoutFeedback onPress={this.flipSides}>
        <Animated.View
          style={[
            style.container,
            { transform: [{ rotateY: rotation }, { scale }] }
          ]}
        >
          {visibleFace === Face.front && (
            <CreditCardViewFront
              style={style.cardFace}
              cardHolderName={creditCardName}
              number={creditCardNumber}
              expiryDate={expiryDate}
            />
          )}
          {visibleFace === Face.back && (
            <CreditCardViewBack
              style={style.cardFace}
              cvc={cvc}
              expiryDate={expiryDate}
              cardHolderName={creditCardName}
            />
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
