import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { ConversionBG, PrimaryColor } from '../theme/colors'
import { defaultCurrencyData } from '../const'
import { CurrencyData } from '../types/currency'
import Dots from './atoms/Dots'
import FullFeeDetails from './FullFeeDetails'

interface ConversionRateDisplayProps {
  amount: string
  selectedCurrency: CurrencyData
}

const ConversionRateDisplay: React.FC<ConversionRateDisplayProps> = ({
  amount,
  selectedCurrency,
}) => {
  const [showFees, setShowFees] = useState(false)

  const toggleFees = () => {
    setShowFees(!showFees)
  }

  return (
    <View style={styles.conversionContainer}>
      <Dots numberOfDots={showFees ? 25 : 8} />
      <View style={styles.innerContainer}>
        <View style={styles.rateAndFees}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.boldText}>
              1 {defaultCurrencyData.currency}{' '}
            </Text>
            <Text style={styles.conversionRate}>
              = {selectedCurrency.currency}{' '}
              {selectedCurrency.exchange_rate}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleFees} style={styles.feesArea}>
            <Text style={styles.feesText}>Fees</Text>
            <Icon
              source={showFees ? 'chevron-up' : 'chevron-down'}
              color={PrimaryColor}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {showFees && (
          <FullFeeDetails amount={amount} selectedCurrency={selectedCurrency} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conversionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    marginVertical: 20,
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  conversionRate: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rateAndFees: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: ConversionBG,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  feesArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feesText: {
    marginRight: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: PrimaryColor,
  },
})

export default React.memo(ConversionRateDisplay)
