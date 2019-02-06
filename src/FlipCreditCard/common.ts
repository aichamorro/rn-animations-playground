import style from "./style";

export const defaultCreditCardNumberLength = 16;
export const defaultCVCPlaceholder = "---";
export const defaultExpiryPlaceholder = "--/--";
export const defaultCardHolderNamePlaceholder = "Card holder's name";
export const defaultCreditCardNumberPlaceholder = "---- ---- ---- ----";

export function addPlaceholderStyleIfNeeded(value: any) {
  if (value) {
    return;
  }

  return style.placeholderTextStyle;
}
