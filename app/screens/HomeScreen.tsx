import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LoadingComponent } from '../components/LoadingComponent'
import { ErrorComponent } from '../components/ErrorComponent'
import TransferComponent from '../components/TransferComponent'
import { useGetAllExchangeRatesQuery } from '../api/ratesSlice'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { White } from '../theme/colors'

export default function HomeScreen() {
  const { data: currencies, error, isLoading } = useGetAllExchangeRatesQuery()

  if (isLoading) return <LoadingComponent />
  if (error) return <ErrorComponent />
  if (!currencies || !Array.isArray(currencies)) return <ErrorComponent />

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <TransferComponent currencies={currencies} />
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})
