/**
 *
 * adjustHex.tsx
 * @author Peter Laxalt
 * @description Lighten / darken hex colors
 * @example adjustHex('#FF0000', 20);
 * @example adjustHex('#FF0000', -20);
 * @returns An adjusted HEX value.
 *
 */

export const adjustHex = (hex: string, amount: number) => {
  var usePound = false;

  if (hex[0] == "#") {
    hex = hex.slice(1);
    usePound = true;
  }

  var num = parseInt(hex, 16);

  var r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
