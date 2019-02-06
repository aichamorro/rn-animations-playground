import style from "./style";

export function addPlaceholderStyleIfNeeded(value: any) {
  if (value) {
    return;
  }

  return style.placeholderTextStyle;
}
