import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import {Text} from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant={'headlineMedium'}>Welcome to Home screen with navigation</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
