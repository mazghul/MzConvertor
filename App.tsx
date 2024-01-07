import AppNavigator from './app/navigation/AppNavigation'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { theme } from './app/theme/themes'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="dark" />
        <AppNavigator />
      </PaperProvider>
    </Provider>
  )
}
