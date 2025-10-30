import "styled-components"
import { IThemeContent } from "@interfaces"

declare module "styled-components" {
    export interface DefaultTheme extends IThemeContent {}
}