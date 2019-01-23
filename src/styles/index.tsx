import breakpoints from "./variables/breakpoints";
import colors from "./variables/colors";
import fonts from "./variables/fonts";
import spacings from "./variables/spacings";

export interface ThemeInterface {
  breakpoints: { [key in keyof typeof breakpoints]: string };
  colors: { [key in keyof typeof colors]: string };
  fonts: { [key in keyof typeof fonts]: string };
  spacings: { [key in keyof typeof spacings]: string };
}

export const theme: ThemeInterface = {
  breakpoints,
  colors,
  fonts,
  spacings
};

