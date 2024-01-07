import { CurrencyData } from '../types/currency'
import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import FeeDetailRow from './FeeDetailRow'
import { defaultCurrencyData } from '../const'
import { FeeDetailsBorderColor } from '../theme/colors'
import { formatCurrency } from '../utils/numUtils'

interface FeeDetailsProps {
  amount: string
  selectedCurrency: CurrencyData
}

const FullFeeDetails: React.FC<FeeDetailsProps> = ({
  amount,
  selectedCurrency,
}) => {
  const calculateAmount = () => {
    return (
      parseFloat(amount.replaceAll(',', '')) - selectedCurrency.fees
    ).toFixed(2)
  }

  const sendingAmount = useMemo(() => {
    return isNaN(parseFloat(amount)) ? '0' : calculateAmount()
  }, [amount, selectedCurrency.fees])

  return (
    <View style={styles.feeDetailsContainer}>
      <FeeDetailRow
        label="Amount:"
        value={`${formatCurrency(amount, defaultCurrencyData.currency)}`}
      />
      <FeeDetailRow
        label="Fees:"
        value={`${defaultCurrencyData.currency} ${selectedCurrency.fees.toFixed(
          2,
        )}`}
      />
      <FeeDetailRow
        label="Sending Amount:"
        value={`${formatCurrency(sendingAmount, defaultCurrencyData.currency)}`}
      />
      <FeeDetailRow
        label="Exchange Rate:"
        value={selectedCurrency.exchange_rate.toFixed(2)}
        isLastRow={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  feeDetailsContainer: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: FeeDetailsBorderColor,
  },
})

export default React.memo(FullFeeDetails)
