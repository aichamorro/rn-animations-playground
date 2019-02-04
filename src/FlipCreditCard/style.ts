import { StyleSheet, Platform } from "react-native";

const CardSize = { width: 400, height: 253.33 };
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
    borderRadius: 15,
    backgroundColor: CardBackgroundColor,
    marginBottom: 27,
    position: "relative"
  },
  cardViewFrontBrandIcon: {
    position: "absolute",
    width: 80,
    height: 53,
    resizeMode: "contain",
    right: 23,
    top: 23
  },
  cardInformationContainer: {
    position: "absolute",
    bottom: 3,
    flexDirection: "row",
    alignItems: "center",
    padding: 23
  },
  cardViewText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "bold",
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
    fontSize: 23,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowColor: "black"
  },
  cardViewFrontCardNameText: {
    flex: 1
  },
  cardViewFrontNumberText: {
    position: "absolute",
    top: 113,
    left: 23,
    fontSize: 30
  },
  cardViewFrontExpiration: {
    position: "relative",
    fontSize: 28
  },
  cardViewFrontExpiryLabel: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 5
  },
  cardViewBackStripe: {
    top: 47,
    height: 48,
    width: "100%",
    backgroundColor: "black"
  },
  cardViewBackCVCContainer: {
    position: "absolute",
    top: 113,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 16,
    marginLeft: 16,
    backgroundColor: "white",
    width: "70%",
    height: 29
  },
  cardViewBackCVCText: {
    fontFamily: "Courier",
    textAlign: "right"
  }
});
