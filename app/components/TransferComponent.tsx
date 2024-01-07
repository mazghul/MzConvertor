import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Text } from 'react-native-paper'
import SenderCurrencyInput from './SenderCurrencyInput'
import RecipientCurrencySelector from './RecipientCurrencySelector'
import ConversionRateDisplay from './ConversionRateDisplay'
import { CurrencyData } from '../types/currency'
import { defaultCurrencyData } from '../const'
import {
  AdditionalNoteColor,
  Black,
  TransferButtonColor,
} from '../theme/colors'
import { formatNumberCurrency } from '../utils/numUtils'

interface TransferComponentProps {
  currencies: CurrencyData[]
}
const TransferComponent = ({ currencies }: TransferComponentProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyData>(
    currencies[0],
  )
  const [amount, setAmount] = useState('100.00')
  const [result, setResult] = useState('')
  const [isAmountUpdating, setIsAmountUpdating] = useState(true)

  const calculateRecipientGets = useCallback(() => {
    const total =
      (parseFloat(amount.replaceAll(',', '')) - selectedCurrency.fees) *
      selectedCurrency.exchange_rate
    return total > 0 ? formatNumberCurrency(total) : '0.00'
  }, [amount, selectedCurrency])

  useEffect(() => {
    if (isAmountUpdating) {
      const recipientGets = calculateRecipientGets()
      setResult(recipientGets)
    }
  }, [amount, selectedCurrency, isAmountUpdating, calculateRecipientGets])

  const handleCurrencySelect = (currency: CurrencyData) => {
    setSelectedCurrency(currency)
  }

  const handleAmountChange = (newAmount: string) => {
    setIsAmountUpdating(true)
    setAmount(newAmount)
  }

  const handleResultChange = useCallback(
    (newResult: string) => {
      setIsAmountUpdating(false)
      if (newResult === '') {
        setAmount(newResult)
        return
      }
      setResult(newResult)
      if (selectedCurrency && selectedCurrency.exchange_rate) {
        const amountWithFees =
          parseFloat(newResult.replaceAll(',', '')) /
            selectedCurrency.exchange_rate +
          selectedCurrency.fees
        setAmount(formatNumberCurrency(amountWithFees))
      }
    },
    [selectedCurrency],
  )

  return (
    <View style={styles.card}>
      <SenderCurrencyInput
        currencyData={defaultCurrencyData}
        amount={amount}
        setAmount={handleAmountChange}
      />
      <ConversionRateDisplay
        amount={amount}
        selectedCurrency={selectedCurrency}
      />
      <RecipientCurrencySelector
        currencyData={currencies}
        amount={result}
        setAmount={handleResultChange}
        onCurrencySelect={handleCurrencySelect}
      />
      <View style={styles.processingTime}>
        <Icon source="lightning-bolt" color={Black} size={20} />
        <Text variant={'bodyMedium'} style={styles.processingTimeText}>
          Processing time - 1 Hour
        </Text>
      </View>
      <Text variant={'bodySmall'} style={styles.note}>
        *Normal working hours & public holidays apply
      </Text>
      <Button
        mode="contained"
        theme={{ roundness: 2 }}
        onPress={() => console.log('Start transfer')}
        style={styles.button}
      >
        Start transfer
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginTop: 30,
    backgroundColor: TransferButtonColor,
  },
  processingTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  processingTimeText: {
    fontWeight: 'bold',
  },
  note: {
    fontSize: 12,
    marginTop: 10,
    color: AdditionalNoteColor,
  },
})

export default React.memo(TransferComponent)
