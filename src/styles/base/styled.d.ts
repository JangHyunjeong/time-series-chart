import "styled-components"
import { fontSizes } from "../constants/fontSizes"
import { colors } from "../constants/colors"

declare module "styled-components" {
  interface DefaultTheme extends ExtendedTheme {
    fontSizes: typeof fontSizes
    colors: typeof colors
  }
}
