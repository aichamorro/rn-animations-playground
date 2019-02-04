import { StyleSheet, Platform } from "react-native";

const CardSize = { width: 300, height: 190 };
const CardBackgroundColor = "rgb(104, 51, 210)";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backfaceVisibility: "visible"
  },
  cardFace: {
    position: "absolute"
  },
  cardView: {
    ...CardSize,
    borderRadius: 10,
    backgroundColor: CardBackgroundColor,
    marginBottom: 20,
    position: "relative"
    // transform: [{ scale: 0.75 }]
  },
  cardViewFrontBrandIcon: {
    position: "absolute",
    width: 60,
    height: 40,
    resizeMode: "contain",
    right: 17,
    top: 17
  },
  cardViewText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "bold",
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
    fontSize: 17,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowColor: "black"
  },
  cardViewFrontCardNameText: {
    top: 150,
    left: 17
  },
  cardViewFrontNumberText: {
    position: "absolute",
    top: 85,
    left: 17,
    fontSize: 23
  },
  cardViewFrontExpiration: {
    position: "absolute",
    top: 140,
    right: 30,
    fontSize: 21
  },
  cardViewFrontExpiryLabel: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4
  },
  cardViewBackStripe: {
    top: 35,
    height: 36,
    width: "100%",
    backgroundColor: "black"
  },
  cardViewBackCVCContainer: {
    position: "absolute",
    top: 85,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 12,
    marginLeft: 12,
    backgroundColor: "white",
    width: "70%",
    height: 22
  },
  cardViewBackCVCText: {
    fontFamily: "Courier",
    textAlign: "right"
  }
});
