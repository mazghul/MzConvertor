import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { CurrencyContainer } from './CurrencyContainer'
import { CurrencyData } from '../types/currency'
import { PrimaryColor, White } from '../theme/colors'
import ScalingTextInput from './atoms/ScalingTextInput'
import { CurrencyModal } from './CurrencyModal'
import { ErrorComponent } from './ErrorComponent'

interface RecipientCurrencySelectorProps {
  currencyData: CurrencyData[]
  amount: string
  setAmount: (_amount: string) => void
  onCurrencySelect: (_currency: CurrencyData) => void
}

const RecipientCurrencySelector: React.FC<
  RecipientCurrencySelectorProps
> = ({ currencyData, amount, setAmount, onCurrencySelect }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyData>(
    currencyData[0],
  )

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  const handleCurrencySelect = (currency: CurrencyData) => {
    setSelectedCurrency(currency)
    onCurrencySelect(currency)
    closeModal()
  }

  if (currencyData.length === 0) {
    return <ErrorComponent />
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <CurrencyContainer
          title="Recipient gets"
          flagUrl={selectedCurrency.flag_url}
          currencySymbol={selectedCurrency.currency}
          isDropdown={true}
        />
      </TouchableOpacity>
      <CurrencyModal
        visible={visible}
        hideModal={closeModal}
        currencyData={currencyData}
        onCurrencySelect={handleCurrencySelect}
      />
      <ScalingTextInput
        testID={'recipient-text-input'}
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
  menuFlag: {
    width: 30,
    height: 20,
  },
})

export default React.memo(RecipientCurrencySelector)
