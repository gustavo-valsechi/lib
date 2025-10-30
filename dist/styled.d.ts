import "styled-components";
import { IThemeContent } from "@interfaces";
declare module "styled-components" {
    interface DefaultTheme extends IThemeContent {
    }
}
