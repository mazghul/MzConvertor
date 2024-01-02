import { DarkTheme } from '@react-navigation/native'
import { White, Disabled, PrimaryColor } from './colors'
import { MD3DarkTheme } from 'react-native-paper'

export const theme = {
  ...DarkTheme,
  ...MD3DarkTheme.colors,
  colors: {
    ...DarkTheme.colors,
    primary: PrimaryColor,
    secondary: White,
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
