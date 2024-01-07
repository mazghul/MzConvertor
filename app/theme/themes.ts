import { White, Disabled, PrimaryColor } from './colors'
import { DefaultTheme, MD3LightTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  ...MD3LightTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    primary: PrimaryColor,
    secondary: White,
    roundness: 5,
    backdrop: 'rgba(0,0,0,0.3)',
    elevation: {
      level2: White,
    },
    fonts: {
      allowFontScaling: false,
      fontScale: 1,
    },
    surfaceDisabled: Disabled,
  },
}
