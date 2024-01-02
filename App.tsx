import AppNavigator from './app/navigation/AppNavigation'
import { PaperProvider } from 'react-native-paper'
// import { PaperProvider } from 'react-native-paper'
import { theme } from './app/theme/themes'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="dark" />
      <AppNavigator />
    </PaperProvider>
  )
}
