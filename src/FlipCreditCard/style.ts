import { StyleSheet, Platform } from "react-native";

const CardSize = { width: 400, height: 253.33 };
export const CardBackgroundColorStart = "#6833d2";
export const CardBackgroundColorEnd = "#3f1f7e";

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
    backgroundColor: CardBackgroundColorStart,
    marginBottom: 27,
    position: "relative"
  },
  cardViewFrontBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.1
  },
  cardViewFrontChip: {
    position: "absolute",
    width: 60,
    height: 60,
    top: 23,
    left: 23
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
  cardInformationContainerReverse: {
    transform: [{ scaleX: -1 }],
    opacity: 0.3
  },
  cardInformationContainerReverseText: {
    color: "rgb(0, 0, 0)",
    shadowRadius: 0,
    fontWeight: "100"
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
    alignItems: "center",
    position: "relative",
    fontSize: 28
  },
  cardViewFrontExpiryLabel: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 5
  },
  cardViewBackStrip: {
    top: 37,
    height: 48,
    width: "100%",
    backgroundColor: "black"
  },
  cardViewBackCVCContainer: {
    position: "absolute",
    top: 100,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 16,
    marginLeft: 16,
    backgroundColor: "white",
    width: "70%",
    height: 29
  },
  cardViewBackCVCText: {
    fontSize: 21,
    fontStyle: "italic",
    fontFamily: "Courier",
    textAlign: "right",
    fontWeight: "bold"
  }
});
