import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CurrencyContainer } from './CurrencyContainer'
import { CurrencyData } from '../types/currency'
import { PrimaryColor, White } from '../theme/colors'
import ScalingTextInput from './atoms/ScalingTextInput'

interface SenderCurrencyInputProps {
  currencyData: CurrencyData
  amount: string
  setAmount: (_amount: string) => void
}

const SenderCurrencyInput: React.FC<SenderCurrencyInputProps> = ({
  currencyData,
  amount,
  setAmount,
}) => {
  return (
    <View style={styles.container}>
      <CurrencyContainer
        title="You send exactly"
        flagUrl={currencyData.flag_url}
        currencySymbol={currencyData.currency}
      />
      <ScalingTextInput
        testID={'sender-text-input'}
        value={amount}
        onChangeText={setAmount}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
  },
  currencyContainer: {
    backgroundColor: PrimaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
  },
  currencyText: {
    color: White,
  },
  currencyRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 8,
  },
  currency: {
    fontSize: 18,
    marginRight: 8,
    color: White,
  },
})

export default React.memo(SenderCurrencyInput)
