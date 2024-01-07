import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { CurrencyRow } from './CurrencyRow'
import { PrimaryColor, White } from '../theme/colors'

interface CurrencyContainerProps {
  title: string
  currencySymbol: string
  flagUrl: string
  isDropdown?: boolean
}

export const CurrencyContainer: React.FC<CurrencyContainerProps> = ({
  title,
  currencySymbol,
  flagUrl,
  isDropdown = false,
}) => {
  return (
    <View style={styles.currencyContainer}>
      <Text style={styles.currencyText} variant={'bodySmall'}>
        {title}
      </Text>
      <View style={styles.currencyRow}>
        <CurrencyRow flagUrl={flagUrl} currencySymbol={currencySymbol} />
        {isDropdown && <Icon source="chevron-down" color={White} size={20} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  currencyContainer: {
    width: 150,
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
    marginTop: 5,
  },
})
